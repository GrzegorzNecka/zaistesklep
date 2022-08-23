import { useState, useEffect, useMemo, useCallback } from "react";
// import { getCartSessionToken } from "./services/localStorage";
import { CartItem } from "components/Cart/types";
import { fetchCartItems, getCartSessionToken, updateCartItems } from "./services/zadanie_cartItems";
import { useMutation } from "react-query";

//dodaj RactQuery

const getToken = () => {
    let token = window.localStorage.getItem("ZAISTE_CART_TOKEN");

    if (!token) {
        const newToken = Math.random().toString(26).substr(2);
        window.localStorage.setItem("ZAISTE_CART_TOKEN", JSON.stringify(newToken));
        return newToken;
    }

    return JSON.parse(token);
};

export const useCartItems = () => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [dispatchCartItems, setDispatchCartItems] = useState(false);

    // const token = await getCartSessionToken();

    const mutation = useMutation(() => {
        const token = getToken();
        return fetchCartItems(token);
    });

    console.log("🚀 ~ file: useCartItems.tsx ~ line 17 ~ mutation ~ mutation", mutation);

    useEffect(() => {
        // console.log(token)

        const getCartItemsSessionState = async () => {
            const token = await getCartSessionToken();
            const { status, cartItems } = await fetchCartItems(token);

            if (!cartItems) {
                return;
            }

            setCartItems(cartItems);
        };

        getCartItemsSessionState();
    }, []);

    /*
    zadanie_cartSessionState?query=getCart
*/

    useEffect(() => {
        if (!dispatchCartItems) {
            return;
        }

        const updateCartItemsSessionState = async () => {
            const token = await getCartSessionToken();
            const data = await updateCartItems(token, cartItems);
            console.log("🚀 ~ ~ data", data);
        };

        updateCartItemsSessionState();
    }, [cartItems, dispatchCartItems]);

    const addItems = (item: CartItem) => {
        if (!dispatchCartItems) {
            setDispatchCartItems(true);
        }

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
        if (!dispatchCartItems) {
            setDispatchCartItems(true);
        }
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
