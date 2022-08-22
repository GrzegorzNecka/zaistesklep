import { CartItem, ResCartItems } from "../types";

//dodaj walidacjeYup

export const fetchCartItems = async (token: string) => {
    const data = await fetch("/api/cartSessionState", {
        headers: {
            "Content-Type": "application/json",
            "Cart-Session-Token": JSON.stringify({ token }),
        },
    });

    const res: ResCartItems = await data.json();
    return res;
};

export const updateCartItems = async (token: string, cartItems: CartItem[]) => {
    const data = await fetch("/api/cartSessionState", {
        headers: {
            "Content-Type": "application/json",
            "Cart-Session-Payload": JSON.stringify({ token, cartItems }),
        },
    });

    const res: ResCartItems = await data.json();
    return res;
};
