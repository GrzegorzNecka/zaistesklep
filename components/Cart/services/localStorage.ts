import { CartItem } from "../types";

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
