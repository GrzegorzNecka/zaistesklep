// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiHandler } from "next";
//https://developers.mailerlite.com/reference/add-single-subscriber

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

    const json = JSON.parse(req.body);
    const email = json.email;

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
        body: JSON.stringify({ email: email, resubscribe: false, autoresponders: true, type: "null" }),
    };

    const mailerLiteResponse = await fetch(
        `https://api.mailerlite.com/api/v2/groups/${MAILERLITE_GROUP_ID}/subscribers`,
        options
    );

    console.log(
        "🚀 ~ file: mailerLite.ts ~ line 40 ~ consthandler:NextApiHandler= ~ mailerLiteResponse ",
        mailerLiteResponse
    );

    if (!mailerLiteResponse.ok) {
        return res.status(mailerLiteResponse.status).json({ error: mailerLiteResponse.statusText });
    }

    return res.status(201).json({});
};

export default handler;
