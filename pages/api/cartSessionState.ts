// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { CartItem, ResCartItems, State, Token } from "components/Cart/types";
import type { NextApiRequest, NextApiResponse } from "next";

const STATE: State[] = [];

const addItemsToState = (token: string, cartItems: CartItem[]) => {
    STATE.push({
        token,
        cartItems,
    });
};

const existToken = (state: State[], token: string) => state.filter((elem) => elem.token === token); // czy ten STATE tutaj powinien być podany

export default function handler(req: NextApiRequest, res: NextApiResponse<ResCartItems>) {
    /* 
        - create token or check if existing token is correct. Return cartItems arraay
    */
    if (req.headers["cart-session-token"]) {
        try {
            const json = req.headers["cart-session-token"];
            if (typeof json !== "string") {
                res.status(400).json({
                    status: "The request could not be understood by the server due to incorrect syntax",
                    error: "bad_request_syntax",
                });
                return;
            }

            const { token }: Token = JSON.parse(json);

            if (!STATE.length || !existToken(STATE, token).length) {
                addItemsToState(token, []);
            }

            const currentStateElem = STATE.find((elem) => elem.token === token);

            if (typeof currentStateElem !== "undefined") {
                res.status(200).json({
                    status: `token_${token}_is_correct`,
                    cartItems: currentStateElem.cartItems,
                });
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
    }

    /* 
        - check token, update STATE and return current cartItems array
    */

    if (req.headers["cart-session-payload"]) {
        try {
            const json = req.headers["cart-session-payload"];

            if (typeof json !== "string") {
                res.status(400).json({
                    status: "The request could not be understood by the server due to incorrect syntax",
                    error: "bad_request_syntax",
                });
                return;
            }

            const { token, cartItems }: State = JSON.parse(json);

            if (!existToken(STATE, token).length) {
                res.status(400).json({
                    status: "The token from request is not exist on the server",
                    error: "token_is_not_exist",
                });
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
    }
}
