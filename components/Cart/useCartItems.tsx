import { useState, useEffect } from "react";
// import { getCartSessionToken } from "./services/localStorage";
import { CartItem } from "components/Cart/types";
import { fetchCartItems, updateCartItems } from "./services/cartItems";
import { useCartToken } from "./useCartToken";

//dodaj RactQuery

export const useCartItems = () => {
    const token = useCartToken(null);
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    useEffect(() => {
        if (!token) {
            return;
        }

        const getCartItemsSessionState = async () => {
            const { status, cartItems } = await fetchCartItems(token);
            console.log("🚀 ~ 1 status, cartItems", status, cartItems);

            if (!cartItems) {
                return;
            }

            setCartItems(cartItems);
        };

        getCartItemsSessionState();
    }, [token]);

    useEffect(() => {
        if (!token) {
            return;
        }
        const updateCartItemsSessionState = async () => {
            const data = await updateCartItems(token, cartItems);
            console.log("🚀 ~ 2 status, cartItems", data);
        };
        updateCartItemsSessionState();
    }, [cartItems, token]);

    const addItems = (item: CartItem) => {
        setCartItems((prevState = []) => {
            const existingItem = prevState.find((prevItem) => prevItem.id === item.id);

            if (!existingItem) {
                return [...prevState, item];
            }

            return prevState.map((prevItem) => {
                if (prevItem.id === item.id) {
                    return {
                        ...prevItem,
                        count: prevItem.count + 1,
                    };
                }

                return prevItem;
            });
        });
    };

    const removeItems = (id: CartItem["id"]) => {
        setCartItems((prevState = []) => {
            const existingItem = prevState.find((eItem) => eItem.id === id);

            if (existingItem && existingItem.count <= 1) {
                return prevState.filter((eItem) => eItem.id !== id);
            }

            return prevState.map((eItem) => {
                if (eItem.id === id) {
                    return {
                        ...eItem,
                        count: eItem.count - 1,
                    };
                }
                return eItem;
            });
        });
    };

    return [cartItems, addItems, removeItems] as const;
};
