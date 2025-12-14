import { NextResponse } from "next/server";
import { getCalendarClient } from "@/lib/google";
import { addDays, setHours, setMinutes, startOfDay, endOfDay, isBefore, addMinutes, formatISO } from "date-fns";
import { toZonedTime } from "date-fns-tz";

// Configuration
const START_HOUR = 9;
const END_HOUR = 20;
const SLOT_DURATION_MINUTES = 45;
const DAYS_TO_SHOW = 5;
const TIMEZONE = "America/Sao_Paulo";

export async function GET() {
    try {
        const calendar = getCalendarClient();
        const calendarId = "primary"; // Always use 'primary' for the authenticated user (caiorarity@gmail.com)

        // 1. Timezone Configuration (Brazil)
        const TIMEZONE = "America/Sao_Paulo";

        // Helper to get formatted date string in target timezone
        const getZonedDateString = (date: Date) => {
            return date.toLocaleDateString("en-CA", { timeZone: TIMEZONE }); // YYYY-MM-DD
        };

        const now = new Date();
        const startDateStr = getZonedDateString(now);

        // Calculate 5 days range
        const startRange = new Date(now);
        const endRange = addDays(now, 5);

        console.log(`[API] Checking availability for ${calendarId} from ${startRange.toISOString()} to ${endRange.toISOString()}`);

        // 2. Fetch Busy Slots from Google
        const response = await calendar.freebusy.query({
            requestBody: {
                timeMin: startRange.toISOString(),
                timeMax: endRange.toISOString(),
                timeZone: TIMEZONE,
                items: [{ id: calendarId }],
            },
        });

        const busySlots = response.data.calendars?.[calendarId]?.busy || [];
        console.log(`[API] Found ${busySlots.length} busy slots via Google API.`);

        // 3. Generate Available Slots
        const availableSlots: string[] = [];

        // Iterate 0 to 4 (5 days)
        for (let i = 0; i < 5; i++) {
            // Create base date for the day loop
            const loopDate = addDays(now, i);
            const loopDateStr = getZonedDateString(loopDate);

            // Construct 9:00 and 20:00 limits for this specific day IN THE TIMEZONE
            // We iterate hours 9 to 19 (last slot at 19:00 ending 19:45/20:00)

            for (let hour = START_HOUR; hour < END_HOUR; hour++) {
                const hourStr = hour.toString().padStart(2, '0');
                const slotIsoStr = `${loopDateStr}T${hourStr}:00:00-03:00`;
                const slotStart = new Date(slotIsoStr);

                if (isNaN(slotStart.getTime())) {
                    console.error(`[API] Invalid Date generated: ${slotIsoStr}`);
                    continue;
                }

                const slotEnd = addMinutes(slotStart, SLOT_DURATION_MINUTES);

                // 3.1 Check if slot is in the past (with buffer)
                const minTime = addMinutes(now, 120);
                if (isBefore(slotStart, minTime)) {
                    // console.log(`[API] Slot ${slotIsoStr} skipped (Past/Too soon). Min: ${minTime.toISOString()}`);
                    continue;
                }

                // 3.2 Check overlap with Busy Slots
                const isBusy = busySlots.some(busy => {
                    const busyStart = new Date(busy.start!);
                    const busyEnd = new Date(busy.end!);
                    const overlap = (slotEnd > busyStart) && (slotStart < busyEnd);
                    if (overlap) console.log(`[API] Slot ${slotIsoStr} BUSY. Overlaps with ${busy.start} - ${busy.end}`);
                    return overlap;
                });

                if (!isBusy) {
                    availableSlots.push(slotStart.toISOString());
                }
            }
        }

        console.log(`[API] Generated ${availableSlots.length} available slots.`);
        return NextResponse.json({ slots: availableSlots });

    } catch (error) {
        console.error("[API] Error fetching availability:", error);
        return NextResponse.json(
            { error: "Failed to fetch availability", details: error instanceof Error ? error.message : String(error) },
            { status: 500 }
        );
    }
}
