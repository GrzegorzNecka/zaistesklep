// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiHandler } from "next";

type Data = {
    name: string;
};

const handler: NextApiHandler<Data> = (req, res) => {
    if (req.method !== "GET") {
        res.setHeader("Allow", "GET").status(405).json(req.body);
        return;
    }

    res.status(200).json({ name: "Jhon" });
};
