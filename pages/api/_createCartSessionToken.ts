//createCartSessionToken

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import crypto from "crypto";

export const generateRandomToken = () => {
    const generator = () => Math.random().toString(26).substr(2);

    const randomString = generator() + generator();
    const salt = crypto.randomBytes(16).toString("hex");
    const token = crypto.pbkdf2Sync(randomString, salt, 1000, 64, "sha512").toString("hex");

    return token;
};

type Data = {
    data: string;
    status: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const data = generateRandomToken();
    res.status(200).json({ status: "success_create_token", data });
}
