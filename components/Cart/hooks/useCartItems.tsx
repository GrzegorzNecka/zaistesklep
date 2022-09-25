import { useState, useEffect, useMemo, useCallback } from "react";
// import { getCartSessionToken } from "./services/localStorage";
import { CartItem } from "components/Cart/types";
import { fetchCartItems, getCartSessionToken, updateCartItems } from "../services/zadanie_cartItems";
import { useSession } from "next-auth/react";
import { apolloClient } from "graphql/apolloClient";
import { useGetCartItemsByCartIdQuery } from "generated/graphql";
import { gql } from "@apollo/client";
import useAddItems from "./useAddItems";

export const useCartItems = () => {
    const session = useSession();

    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    //------------------- get initial CartItems from graphQl

    const { data } = useGetCartItemsByCartIdQuery({
        skip: !Boolean(session.data?.user?.cartId),
        variables: {
            id: session.data?.user?.cartId!,
        },
        onCompleted: (data) => {
            setIsLoading(false);
            console.log("seGetCartItemsByCartIdQuery -  data", data);
        },
        onError: (error) => {
            console.log("seGetCartItemsByCartIdQuery - error", error);
        },
    });

    // ---------------- update React Context

    useEffect(() => {
        if (session.status !== "authenticated" || !data || !data.cart) {
            return;
        }

        const initialCartItems = data.cart.cartItems.map((item) => {
            return {
                id: item.product!.id,
                price: item.product!.price,
                title: item.product!.name,
                count: item.quantity,
                imgUrl: item.product!.images[0].url,
                slug: item.product!.slug,
            };
        });

        setCartItems(initialCartItems);
    }, [data, session]);

    const [handleAddItemToCart] = useAddItems({ setIsLoading });

    const removeItems = (id: CartItem["id"]) => {};

    return [cartItems, isLoading, handleAddItemToCart, removeItems] as const;
};
