// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { CartItem } from "components/Cart/types";

type Data = {
    cartItems: string;
    token?: string;
};

type Session = {
    cartItems: CartItem[];
    token: string;
};

const sessionCartState: Session[] = [];

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    switch (req.method) {
        case "POST": {
            // ?co jeśli token instnieje
            try {
                const { token, cartItems } = req.body;

                sessionCartState.push({
                    token,
                    cartItems,
                });

                res.status(200).json({ cartItems });
            } catch (error) {
                // res.status(422).json({ status: "not_created", error: error.message });
            }
            break;
        }
        case "GET": {
            if (!req.headers.token) {
                return;
            }

            const requestToken = req.headers.token;

            console.log("🚀 ~ file: cartState.ts ~ line 36 ~ handler ~ req.headers.token", requestToken);
            console.log("🚀 ~ file: cartState.ts ~ line 40 ~ handler ~ sessionCartState", sessionCartState);

            const isExistCartSessionToken = sessionCartState.filter((obj) => {
                return obj.token === requestToken;
            });

            // jeśli true zwróć nowy koszyk ,
            // jeśli false zwróć pusty koszyk a token dodaj do listy
            const test = isExistCartSessionToken?.cartItems || [];

            console.log("🚀 ~ file: cartState.ts ~ line 44 ~ test ~ test", test);

            res.status(200).json({ cartItems: "John Doe" });
            break;
        }
        default:
            res.status(400);
    }
}
