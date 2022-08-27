import { useState, useEffect } from "react";
// import { getCartSessionToken } from "./services/localStorage";
import { CartItem } from "components/Cart/types";
import { fetchCartItems, getCartSessionToken, updateCartItems } from "./services/zadanie_cartItems";

//dodaj RactQuery

export const useCartItems = () => {
    const [dispatchCartItems, setDispatchCartItems] = useState(false);
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    useEffect(() => {
        const getCartItemsForSerwerSessionState = async () => {
            const cartToken = await getCartSessionToken();
            const data = await fetchCartItems(cartToken);

            if (!data.cartItems) {
                return;
            }

            setCartItems(data.cartItems);
        };

        getCartItemsForSerwerSessionState();
    }, []);

    /*
    zadanie_cartSessionState?query=getCart
    */

    useEffect(() => {
        if (!dispatchCartItems) {
            return;
        }
        const updateCartItemsOnSerwerSessionState = async () => {
            const cartToken = await getCartSessionToken();
            updateCartItems(cartToken, cartItems);
        };

        updateCartItemsOnSerwerSessionState();
    }, [cartItems, dispatchCartItems]);

    /*
    event 
    */

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
