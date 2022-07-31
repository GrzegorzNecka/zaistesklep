// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { CartItem } from "components/Cart/types";

type Session = {
    cartItems: CartItem[];
    token?: string;
};

const sessionCartState: Session[] = [];

const isTokenExist = (state: Session[], token: string) => {
    return state.filter((obj) => {
        if (obj.token === token) {
            return true;
        }

        return false;
    });
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Session>) {
    switch (req.method) {
        case "POST": {
            try {
                const payload = req.body;

                const isToken = isTokenExist(sessionCartState, payload.token);

                if (!isToken.length) {
                    sessionCartState.push({
                        token: payload.token.trim(),
                        cartItems: payload.cartItems,
                    });
                }

                const session = sessionCartState.find((session) => {
                    if (session.token === payload.token) {
                        session.cartItems = payload.cartItems;

                        return session.token;
                    }
                });

                console.log("🚀 ~ file: cartSession.ts ~ line 44 ~ session ~ sessionCartState", sessionCartState);

                const cartItems = session?.cartItems || [];

                res.status(200).json({ cartItems: cartItems });
            } catch (error) {
                console.log(error);
                // res.status(422).json({ status: "not_created", error: error.message });
            }
            break;
        }

        default:
            res.status(400);
    }
}
