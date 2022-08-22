import { useState, useEffect, useMemo, useCallback } from "react";
// import { getCartSessionToken } from "./services/localStorage";
import { CartItem } from "components/Cart/types";
// import { fetchCartItems, updateCartItems } from "./_services/cartItems";
import { useCartToken } from "./_useCartToken";
import { CreateOrderDocument, useCreateItemOrderMutation, useCreateOrderMutation } from "generated/graphql";
// import { useCreateItemOrderMutation } from "generated/graphql";

//dodaj RactQuery

export const useCartItems = () => {
    // const token = useCartToken(null);
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    const [dispatchCartItems, setDispatchCartItems] = useState(false);

    // const [createItemOrderMutation, { data, loading, error }] = useCreateItemOrderMutation();

    const [createOrderMutation, { data }] = useCreateOrderMutation();

    useEffect(() => {
        const addOrder = () => {
            let id = localStorage.getItem("ZAISTE_ORDER_ID");
            console.log("🚀 ~ file: useCartItems.tsx ~ line 23 ~ addOrder ~ id", id);

            if (!id) {
                createOrderMutation({
                    mutation: CreateOrderDocument,
                    variables: {
                        orderData: {
                            email: "johndoil@gmail.com",
                            total: 0,
                            stripeCheckoutId: "stripe_test_123",
                        },
                    },
                });

                if (data) {
                    localStorage.setItem("ZAISTE_ORDER_ID", JSON.stringify(data));
                }
            }
        };
        //{"createOrder":{"id":"cl757si5avmlr0bt7ys59ip1l","__typename":"Order"}}
        addOrder();
    });

    // useEffect(() => {
    //     if (!token) {
    //         return;
    //     }

    //     const getCartItemsSessionState = async () => {
    //         const { status, cartItems } = await fetchCartItems(token);

    //         if (!cartItems) {
    //             return;
    //         }

    //         setCartItems(cartItems);
    //     };

    //     getCartItemsSessionState();
    // }, [token]);

    // useEffect(() => {
    //     if (!token) {
    //         return;
    //     }

    //     if (!dispatchCartItems) {
    //         return;
    //     }

    //     const updateCartItemsSessionState = async () => {
    //         const data = await updateCartItems(token, cartItems);
    //     };
    //     updateCartItemsSessionState();
    // }, [cartItems, token, dispatchCartItems]);

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
