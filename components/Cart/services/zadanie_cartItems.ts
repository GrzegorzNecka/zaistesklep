import { CartItem, ResponseCartItems } from "../types";

export const fetchCartItems = async (token: string) => {
    const data = await fetch("/api/zadanie_cartSessionState?query=getToken", {
        method: "POST",
        body: JSON.stringify({ token }),
        headers: {
            "Content-Type": "application/json",
        },
    });

    const res: ResponseCartItems = await data.json();
    return res;
};

export const updateCartItems = async (token: string, cartItems: CartItem[]) => {
    const data = await fetch("/api/zadanie_cartSessionState?query=getCart", {
        method: "POST",
        body: JSON.stringify({ token, cartItems }),
        headers: {
            "Content-Type": "application/json",
        },
    });

    const res: ResponseCartItems = await data.json();
    return res;
};
