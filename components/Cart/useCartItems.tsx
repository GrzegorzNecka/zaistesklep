import { useState, useEffect } from "react";
import { getCartItemsFromStorage, getCartSessionToken, setCartItemsInStorage } from "./services/localStorage";
import { CartItem } from "components/Cart/types";
import { fetchCartItems, updateCartItems } from "./services/cartItems";

export const useCartItems = () => {
    const [token, setToken] = useState("");
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    useEffect(() => {
        const getToken = async () => {
            const localStorageToken = await getCartSessionToken();
            console.log("🚀 ~ file: useCartItems.tsx ~ line 13 ~ getToken ~ localStorageToken", localStorageToken);
            if (!localStorageToken.length) {
                return;
            }
            setToken(localStorageToken);
        };

        getToken();

        // setCartItems(getCartItemsFromStorage());
    }, []);

    useEffect(() => {
        const getCartItmes = async () => {
            const data = await fetchCartItems(token);
            setCartItems(data.cartItems);
            console.log("1", data);
        };

        getCartItmes();

        // setCartItems(getCartItemsFromStorage());
    }, [token]);

    useEffect(() => {
        const getCartItmes = async () => {
            // const localStorageToken = await getCartSessionToken();

            if (!token.length) {
                return;
            }
            console.log("🚀 ~ file: useCartItems.tsx ~ line 37 ~ getCartItmes ~ token", token);
            const data = await updateCartItems(token, cartItems);

            console.log("2", data);
        };
        getCartItmes();
        // setCartItemsInStorage(cartItems);
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
