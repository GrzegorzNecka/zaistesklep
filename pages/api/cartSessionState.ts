// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { CartItem } from "components/Cart/types";
import type { NextApiRequest, NextApiResponse } from "next";

type Token = {
    token: string;
};

interface State {
    token?: string;
    cartItems: CartItem[];
}
const state: State[] = [];

const addItemsToState = (token: string, cartItems: CartItem[]) => {
    state.push({
        token,
        cartItems,
    });
};
// czy ten state tutaj powinien być podany
const isTokenExist = (state: State[], token: string) => state.filter((elem) => elem.token === token);

export default function handler(req: NextApiRequest, res: NextApiResponse<State>) {
    if (req.headers["cart-session-token"]) {
        const json = req.headers["cart-session-token"];

        if (typeof json !== "string") {
            return;
            //zwróć res
        }

        const { token }: Token = JSON.parse(json);

        if (!state.length || !isTokenExist(state, token).length) {
            addItemsToState(token, []);
        }

        const currentStateElem = state.find((elem) => elem.token === token);

        console.log(state);

        if (typeof currentStateElem !== "undefined") {
            res.status(200).json({ cartItems: currentStateElem.cartItems });
        }
    }
}
