import type { NextApiRequest, NextApiResponse } from "next";

// https://www.youtube.com/watch?v=xoPguAXJmiE

type result = string;
type error = string;

type ResponseData = result | error;

export default async function userHandler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
    const {
        query: { take, offset },
        method,
    } = req;

    console.log("take", take);
    console.log("offset", offset);

    const getProducts = async () => {
        const res = await fetch(`http://fakestoreapi.com/products/`);
        const data = await res.json();
        return data;
    };

    switch (method) {
        case "GET":
            const result = await getProducts();

            try {
                res.status(200).json({ result });
            } catch (err) {
                res.status(500).json({ error: "failed to load data" });
            }

            // res.status(200).json({ id, name: `User ${id}` });
            // res.status(200).json({ name: "John Doe" });
            break;

        default:
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}
