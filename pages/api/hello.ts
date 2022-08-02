// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    name: number[];
};

const state: number[] = [];

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    try {
        state.push(1);
        res.status(200).json({ name: state });
    } catch (err) {
        console.error(err);
    }
}
