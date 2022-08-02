import { CartItem } from "../types";

export const fetchCartItems = async (token: string) => {
    const data = await fetch("/api/cartSessionState", {
        headers: {
            "Content-Type": "application/json",
            "Cart-Session-Token": JSON.stringify({ token: token }),
        },
    });

    const res = await data.json();
    return res;
};

export const updateCartItems = async (token: string, cartItems: CartItem[]) => {
    const data = await fetch("/api/cartSessionState", {
        headers: {
            "Content-Type": "application/json",
            "Cart-Session-Payload": JSON.stringify({ token, cartItems }),
        },
    });

    const res = await data.json();
    return res;
};
