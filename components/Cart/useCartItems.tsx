import { useState, useEffect, useMemo, useCallback } from "react";
// import { getCartSessionToken } from "./services/localStorage";
import { CartItem } from "components/Cart/types";
import { fetchCartItems, getCartSessionToken, updateCartItems } from "./services/zadanie_cartItems";
import { useMutation, useQuery } from "react-query";

//dodaj RactQuery

export const useCartItems = () => {
    const [dispatchCartItems, setDispatchCartItems] = useState(false);

    const token = "cf0f8ad828a284c84277d22b9dd758b95342dde4621ca3906c44b";
    // const getInitialState = () => {
    //     return fetch("/api/zadanie_cartSessionState?query=getToken", {
    //         method: "POST",
    //         body: JSON.stringify({ token: token }),
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //     }).then((res) => res.json());
    // };

    // const testState = useQuery(["statQuery", token], () => getInitialState(), { keepPreviousData: true });

    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    // const cartMutation3 = useMutation(
    //     () =>
    //         fetch("/api/zadanie_cartSessionState?query=getToken", {
    //             method: "POST",
    //             body: JSON.stringify({ token: "cf0f8ad828a284c84277d22b9dd758b95342dde4621ca3906c44b" }),
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //         }).then((res) => res.json()),
    //     {
    //         onSuccess(data) {
    //             console.log("Succesful", { data });
    //         },
    //         onError(error) {
    //             console.log("Failed", { error });
    //         },
    //         onSettled() {
    //             console.log("Mutation completed.");
    //         },
    //     }
    // );
    // mutation.mutateAsync();

    // if (dispatchCartItems) {
    //     cartMutation3.mutate();
    // }

    // console.log("🚀 ~ const{data}=useMutation ~ data", cartMutation3);

    // useEffect(() => {

    //     const getCartItemsSessionState = async () => {
    //         const token = await getCartSessionToken();
    //         const { status, cartItems } = await fetchCartItems(token);

    //         if (!cartItems) {
    //             return;
    //         }

    //         setCartItems(cartItems);
    //     };

    //     getCartItemsSessionState();
    // }, []);

    /*
    zadanie_cartSessionState?query=getCart
*/

    // useEffect(() => {
    //     if (!dispatchCartItems) {
    //         return;
    //     }

    //     const updateCartItemsSessionState = async () => {
    //         const token = await getCartSessionToken();
    //         const data = await updateCartItems(token, cartItems);
    //         console.log("🚀 ~ ~ data", data);
    //     };

    //     updateCartItemsSessionState();
    // }, [cartItems, dispatchCartItems]);

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
