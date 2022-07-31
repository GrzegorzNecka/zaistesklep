import { useState, useEffect } from "react";
import { getCartItemsFromStorage, setCartItemsInStorage, getCartSessionToken } from "./services/localStorage";
import { CartItem } from "components/Cart/types";
import { useQuery, useQueryClient } from "react-query";

const getCartSession = async (cartToken: string, cartItems: CartItem[]) => {
    const payload = { token: cartToken, cartItems: cartItems };

    const data = await fetch("/api/cartSession", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
            "Content-Type": "application/json",
        },
    });

    const res = await data.json();

    return res;
};

export const useCartItems = () => {
    const [cartToken, setCartToken] = useState<string>();
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    /**
     *  ------- token -------
     */

    useEffect(() => {
        const token = async () => {
            const data = await getCartSessionToken();
            setCartToken(data);
        };

        token();
    }, []);

    useEffect(() => {
        console.log(cartToken);
        // console.log(cartItems.length);
        if (!cartToken) {
            return;
        }

        // if (!cartItems.length) {
        //     return;
        // }

        const fetchCartSession = async () => {
            const cartState = await getCartSession(cartToken, cartItems);
            setCartItems(cartState);
        };

        console.log("s");

        fetchCartSession();
    }, [cartToken]);

    useEffect(() => {
        if (!cartToken) {
            return;
        }

        if (!cartItems.length) {
            return;
        }
        const updateCartSession = async () => {
            const cartState = await getCartSession(cartToken, cartItems);
        };

        updateCartSession();
    }, [cartToken, cartItems]);

    const addItems = (item: CartItem) => {
        setCartItems((prevState = []) => {
            const existingItem = prevState.find((prevItem) => prevItem?.id === item?.id);

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
