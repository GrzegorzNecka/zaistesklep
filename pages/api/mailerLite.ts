// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiHandler } from "next";

const handler: NextApiHandler = async (req, res) => {
    if (req.method !== "POST") {
        res.setHeader("Allow", "POST").status(405).end();
        return;
    }

    const MAILERLITE_API_KEY = process.env.MAILERLITE_API_KEY;
    const MAILERLITE_GROUP_ID = process.env.MAILERLITE_GROUP_ID;

    if (!MAILERLITE_API_KEY || !MAILERLITE_GROUP_ID) {
        return res.status(500).json({ error: "Nie podano zmiennych środowiskowych" });
    }

    const email = req.body.email;
    if (typeof email !== "string") {
        return res.status(400).end();
    }

    const options = {
        method: "POST",
        headers: {
            Accept: "application/json",
            "X-MailerLite-ApiDocs": "true",
            "Content-Type": "application/json",
            "X-MailerLite-ApiKey": MAILERLITE_API_KEY,
        },
        body: JSON.stringify({ email: "null", resubscribe: false, autoresponders: true, type: "null" }),
    };

    const mailerLiteResponse = await fetch(
        `https://api.mailerlite.com/api/v2/groups/${MAILERLITE_GROUP_ID}/subscribers`,
        options
    );

    if (!mailerLiteResponse.ok) {
        return res.status(500).json({ error: `Pojawił się problem przy zapisie newslettera` });
    }

    return res.status(201).json({});
};

export default handler;
