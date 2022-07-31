import { useState, useEffect } from "react";
import { getCartItemsFromStorage, setCartItemsInStorage, getCartSessionToken } from "./services/localStorage";
import { CartItem } from "components/Cart/types";
import { useQuery, useQueryClient } from "react-query";

// const fetchCartState = async () => {
//     const data = await getCartItemsFromStorage();
//     return data;
// };

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
        //?! dlaczego nie mogęużyć && wtedy są2 requesty
        //! co z przypadkiem kiedy cartToken !== ""
        if (!cartToken) {
            return;
        }

        if (!cartItems.length) {
            return;
        }

        const getCartState = async () => {
            const data = await fetch("/api/cartSession", {
                method: "POST",
                body: JSON.stringify({ token: cartToken, cartItems: cartItems }),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            const res = await data.json();
            console.log("🚀 ~ file: useCartItems.tsx ~ line 38 ~ getCartState ~ res", res);
        };

        getCartState();
    }, [cartToken, cartItems]);

    // ----------------------- cart State

    // const { data } = useQuery("cartState", fetchCartState);

    useEffect(() => {
        // if (!data) {
        //     return;
        // }

        setCartItems(getCartItemsFromStorage());
    }, []);

    useEffect(() => {
        setCartItemsInStorage(cartItems);
    }, [cartItems]);

    //-------------------

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
