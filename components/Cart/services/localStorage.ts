import { CartItem } from "../types";
//https://codesandbox.io/s/vvfw0?file=/src/custom-hooks/useLocalStorage.tsx
export const getCartItemsFromStorage = () => {
    const itemsFromLocalStorage = localStorage.getItem("ZAISTE_SHOPPING_CART");

    if (!itemsFromLocalStorage) {
        return [];
    }

    try {
        const items = JSON.parse(itemsFromLocalStorage);
        return items;
    } catch (error) {
        console.error(error);
        return [];
    }
};

export const setCartItemsInStorage = (cartItems: CartItem[]) => {
    localStorage.setItem("ZAISTE_SHOPPING_CART", JSON.stringify(cartItems));
};

export const getCartSessionToken = async (): Promise<string> => {
    let token = localStorage.getItem("ZAISTE_CART_TOKEN");

    if (!token) {
        const newToken = await fetch("/api/createCartSessionToken");

        try {
            const { status, data } = await newToken.json();
            console.log("🚀 ~ file: localStorage.ts ~ line 31 ~ getCartSessionToken ~ status", status);
            localStorage.setItem("ZAISTE_CART_TOKEN", JSON.stringify(data));
            return data;
        } catch (error) {
            let message = "token_is_not_created";
            if (error instanceof Error) {
                message = error.message;
            }

            console.error(message);

            return "";
        }
    }

    return JSON.parse(token);
};
