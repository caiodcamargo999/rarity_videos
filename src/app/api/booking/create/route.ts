import { NextResponse } from "next/server";
import { getCalendarClient } from "@/lib/google";
import { addMinutes } from "date-fns";
import { z } from "zod";

const createBookingSchema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    whatsapp: z.string().min(10),
    businessName: z.string().min(1),
    instagram: z.string().min(1),
    niche: z.string().min(2),
    startDateTime: z.string().datetime(), // ISO string
});

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, whatsapp, niche, startDateTime, businessName, instagram } = createBookingSchema.parse(body);

        const calendar = getCalendarClient();
        const calendarId = "primary";

        console.log(`[API] Creating booking for ${name} (${email}) on ${calendarId}`);

        const start = new Date(startDateTime);
        const end = addMinutes(start, 45); // 45 min duration

        const event = {
            summary: `Reunião Rarity: ${name} (${niche})`,
            description: `
        **Cliente:** ${name}
        **Nicho:** ${niche}
        **WhatsApp:** ${whatsapp}
        **Email:** ${email}
        
        Agendado via Site Rarity Videos.
      `,
            start: {
                dateTime: start.toISOString(),
                timeZone: "America/Sao_Paulo",
            },
            end: {
                dateTime: end.toISOString(),
                timeZone: "America/Sao_Paulo",
            },
            attendees: [
                {
                    email: email, // Email obtained from the form
                    displayName: name,
                    responseStatus: 'needsAction' // Forces the "Yes/No/Maybe" prompt
                }
            ],
            reminders: {
                useDefault: false,
                overrides: [
                    { method: 'email', minutes: 24 * 60 },
                    { method: 'popup', minutes: 30 },
                ],
            },
            guestsCanSeeOtherGuests: false, // Privacy for 1:1 meetings
            conferenceData: {
                createRequest: {
                    requestId: Math.random().toString(36).substring(7),
                    conferenceSolutionKey: { type: "hangoutsMeet" },
                },
            },
        };

        // 1. Prepare Calendar Request
        const calendarPromise = calendar.events.insert({
            calendarId,
            requestBody: event,
            conferenceDataVersion: 1,
            sendUpdates: "all", // This triggers the email invite and takes time
        });

        // 2. Prepare Sheets Request (Concurrent)
        const sheetsPromise = (async () => {
            try {
                // Formatting data for sheet
                // Note: We use the already computed 'start' date to avoid recalculating unnecessarily
                const meetingDateFormatted = start.toLocaleString("pt-BR", {
                    timeZone: "America/Sao_Paulo",
                    day: "2-digit", month: "2-digit", year: "numeric",
                    hour: "2-digit", minute: "2-digit"
                });
                const timestamp = new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" });

                const { getSheetsClient } = await import("@/lib/google");
                const sheets = getSheetsClient();
                const SPREADSHEET_ID = "17AMEPwfahz71aOxjdHZWOFtPB2alxGpW9RSmeJNEpLc";

                // We write to 'Leads' tab to avoid locale naming issues (Página1 vs Sheet1 vs Folha1)
                // User must rename the tab to 'Leads'
                await sheets.spreadsheets.values.append({
                    spreadsheetId: SPREADSHEET_ID,
                    range: "Leads!A:H",
                    valueInputOption: "USER_ENTERED",
                    requestBody: {
                        values: [
                            [
                                name,
                                whatsapp,
                                email,
                                businessName,
                                instagram,
                                niche,
                                meetingDateFormatted,
                                timestamp
                            ]
                        ]
                    }
                });
                console.log("[API] Lead saved to Google Sheets (Parallel).");
            } catch (sheetError: any) {
                console.error("[API] ❌ ERROR SAVING TO SHEETS:", sheetError.message);
                if (sheetError.code === 403 || sheetError.code === 401) {
                    console.error("👉 CAUSE: Missing permissions. Did you add the 'spreadsheets' scope to your Refresh Token?");
                }
                if (sheetError.code === 400) {
                    console.error("👉 CAUSE: Sheet not found. Please rename the tab/aba to 'Leads'.");
                }
            }
        })();

        // 3. Prepare Webhook Request (Concurrent)
        const webhookPromise = (async () => {
            try {
                const webhookUrl = "https://primary-production-ff176.up.railway.app/webhook/rarity-videos-form";

                // Formatting data for webhook just in case they need the formatted date too
                const meetingDateFormatted = start.toLocaleString("pt-BR", {
                    timeZone: "America/Sao_Paulo",
                    day: "2-digit", month: "2-digit", year: "numeric",
                    hour: "2-digit", minute: "2-digit"
                });

                const payload = {
                    name,
                    email,
                    whatsapp,
                    businessName,
                    instagram,
                    niche,
                    startDateTime: start.toISOString(),
                    meetingDateFormatted
                };

                console.log("[API] Sending data to n8n webhook...");
                const webhookResponse = await fetch(webhookUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(payload),
                });

                if (!webhookResponse.ok) {
                    throw new Error(`Webhook failed with status: ${webhookResponse.status}`);
                }
                console.log("[API] Webhook sent successfully.");
            } catch (webhookError: any) {
                console.error("[API] ❌ ERROR SENDING WEBHOOK:", webhookError.message);
                // We intentionally do not throw here to prevent blocking the user response
            }
        })();

        // 4. Await all operations concurrently
        // This cuts down the user waiting time significantly
        console.log("[API] Executing Calendar, Sheets, and Webhook tasks concurrently...");
        const [response] = await Promise.all([calendarPromise, sheetsPromise, webhookPromise]);

        console.log(`[API] Event created. Invite sent to ${email}. Link: ${response.data.hangoutLink}`);

        return NextResponse.json({
            success: true,
            eventId: response.data.id,
            meetLink: response.data.hangoutLink
        });

    } catch (error) {
        console.error("Error creating booking:", error);
        if (error instanceof z.ZodError) {
            return NextResponse.json({ error: "Invalid data", details: (error as z.ZodError).issues }, { status: 400 });
        }
        return NextResponse.json(
            { error: "Failed to create booking" },
            { status: 500 }
        );
    }
}
