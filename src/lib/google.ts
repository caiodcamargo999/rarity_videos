import { google } from "googleapis";

export const getGoogleAuth = () => {
    const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_REFRESH_TOKEN } = process.env;

    if (!GOOGLE_CLIENT_ID || !GOOGLE_CLIENT_SECRET || !GOOGLE_REFRESH_TOKEN) {
        throw new Error("Missing Google OAuth credentials in environment variables.");
    }

    const oauth2Client = new google.auth.OAuth2(
        GOOGLE_CLIENT_ID,
        GOOGLE_CLIENT_SECRET
    );

    oauth2Client.setCredentials({
        refresh_token: GOOGLE_REFRESH_TOKEN,
    });

    return oauth2Client;
};

export const getCalendarClient = () => {
    // We get a fresh calendar client but sharing the same cached auth
    const auth = getGoogleAuth();
    return google.calendar({ version: "v3", auth });
};

export const getSheetsClient = () => {
    const auth = getGoogleAuth();
    return google.sheets({ version: "v4", auth });
};
