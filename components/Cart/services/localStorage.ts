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
