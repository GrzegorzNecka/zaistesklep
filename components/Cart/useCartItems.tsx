import { useState, useEffect } from "react";
import { getCartItemsFromStorage, setCartItemsInStorage } from "./services/localStorage";
import { CartItem } from "components/Cart/types";

const testApiState = async (token: string) => {
    const data = await fetch("/api/cartSessionState", {
        headers: {
            "Content-Type": "application/json",
            "Cart-Session-Token": JSON.stringify({ token: token }),
        },
    });

    const res = await data.json();
    return res;
};

export const useCartItems = () => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    useEffect(() => {
        const checkApiState = async () => {
            const result = await testApiState("ssssssss");
            console.log("🚀 ~ result", result);
            const result2 = await testApiState("sssdddd");
            console.log("🚀 ~ result2", result2);
            const result1 = await testApiState("ssssssss");
            console.log("🚀 ~ result", result1);
        };

        checkApiState();

        setCartItems(getCartItemsFromStorage());
    }, []);

    useEffect(() => {
        setCartItemsInStorage(cartItems);
    }, [cartItems]);

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
