"use server";

export async function submitToTrello(formData: any) {
    const apiKey = process.env.NEXT_PUBLIC_TRELLO_API_KEY;
    const token = process.env.TRELLO_TOKEN;
    const listId = process.env.TRELLO_LIST_ID;

    if (!apiKey || !token || !listId) {
        console.error("Missing Trello credentials");
        return { success: false, error: "Missing configuration" };
    }

    const name = `${formData.name} - Modal Página Rarity Brasil`;
    const desc = `
**Nome:** ${formData.name}
**Whatsapp:** ${formData.whatsapp}
**Email:** ${formData.email}
**Negócio:** ${formData.businessName}
**Instagram:** ${formData.instagram}
**Nicho:** ${formData.niche}
  `.trim();

    try {
        const params = new URLSearchParams({
            idList: listId,
            key: apiKey,
            token: token,
            name: name,
            desc: desc,
        });

        const response = await fetch(`https://api.trello.com/1/cards?${params}`, {
            method: "POST",
            headers: {
                "Accept": "application/json"
            }
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error("Trello API Error:", errorText);
            return { success: false, error: errorText };
        }

        const data = await response.json();
        return { success: true, data };

    } catch (error) {
        console.error("Server Action Error:", error);
        return { success: false, error: "Internal Server Error" };
    }
}
