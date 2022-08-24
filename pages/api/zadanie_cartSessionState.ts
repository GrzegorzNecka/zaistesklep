// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { CartItem, State, Token } from "components/Cart/types";
import type { NextApiHandler } from "next";

const STATE: State[] = [];

const addItemsToState = (token: string, cartItems: CartItem[]) => {
    STATE.push({
        token,
        cartItems,
    });
};

const existToken = (state: State[], token: string) => state.find((elem) => Boolean(elem.token === token));

const handler: NextApiHandler = async (req, res) => {
    if (req.method !== "POST") {
        res.status(405).json({ message: "Method Not Allowed" });
        return;
    }

    if (typeof req.query.query !== "string") {
        res.status(400).json({ message: "bad request query" });
        return;
    }

    /*
         switch request query conditions 
    */

    switch (req.query.query) {
        case "fetchCartItems":
            try {
                const { token }: Token = req.body;
                console.log("🚀 ~ czy token przyszedł z requestu ~ token", token);

                if (!STATE.length || !existToken(STATE, token)) {
                    addItemsToState(token, []);
                }

                console.log("fetchCartItems--existToken", existToken(STATE, token));
                console.log("fetchCartItems-- STATE", STATE);

                const currentStateElem = STATE.find((elem) => elem.token === token);

                if (typeof currentStateElem !== "undefined") {
                    res.status(200).json({
                        status: `token_${token}_is_correct`,
                        cartItems: currentStateElem.cartItems,
                    });
                    return;
                }
            } catch (err) {
                let message = "server is unable to process the request for some reason.";
                if (err instanceof Error) {
                    message = err.message;
                }

                res.status(422).json({
                    status: "unknown_request_problem",
                    error: message,
                });

                return;
            }

            return;
        case "updateCartItems":
            try {
                const { token, cartItems }: State = req.body;
                console.log("🚀 ~ czy token przyszedł z requestu ~ token", token);
                console.log("updateCartItems--existToken", existToken(STATE, token));
                console.log("updateCartItems-- STATE", STATE);

                if (!existToken(STATE, token)) {
                    res.status(400).json({ message: "token is not exist" });
                    return;
                }

                const currentStateElem = STATE.find((elem) => {
                    if (elem.token === token) {
                        elem.cartItems = cartItems;
                        return elem;
                    }
                });

                if (!currentStateElem) {
                    return;
                }

                res.status(200).json({
                    status: `updated_cart_items_for_token_${token}`,
                    cartItems: currentStateElem.cartItems,
                });
                return;
            } catch (err) {
                let message = "server is unable to process the request for some reason.";
                if (err instanceof Error) {
                    message = err.message;
                }

                res.status(422).json({ message: "unknown_request_problem" });

                return;
            }

        default:
            res.status(400).json({ message: "bad request query" });
            return;
    }
};

export default handler;
