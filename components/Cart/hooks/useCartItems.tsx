import { useState, useEffect, useMemo, useCallback } from "react";
// import { getCartSessionToken } from "./services/localStorage";
import { CartItem } from "components/Cart/types";
import { fetchCartItems, getCartSessionToken, updateCartItems } from "../services/zadanie_cartItems";
import { useSession } from "next-auth/react";
import { apolloClient } from "graphql/apolloClient";
import {
    GetCartItemsByCartIdDocument,
    GetCartItemsDocument,
    GetCartItemsQuery,
    GetCartItemsQueryVariables,
    useGetCartItemsByCartIdQuery,
    useGetCartItemsQuery,
} from "generated/graphql";
import { ApolloClient, gql } from "@apollo/client";
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
        fetchPolicy: "network-only",
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

    // ---------------- handleAddItemToCart React Context

    const handleAddItemToCart = async (product: CartItem) => {
        if (session.status !== "authenticated" || !data || !data.cart) {
            return;
        }

        setIsLoading(true);

        const sign = `${session.data?.user.email}_${product.id}`;

        const payload = {
            productId: product.id,
            sign,
            quantity: product.count,
        };

        const add = await fetch("/api/cart/addItem", {
            method: "POST",
            headers: { "Content-Type": "application/json;" },
            body: JSON.stringify(payload),
        });

        console.log("🚀 ~ file: useCartItems.tsx ~ line 82 ~ handleAddItemToCart ~ add", add.status);

        if (add.status === 200) {
            setIsLoading(false);

            apolloClient.refetchQueries({
                include: [GetCartItemsByCartIdDocument],
            });
        }

        //----------------------------------------------------------------

        // const isExistItem = existCartItems.find((item) => item?.product?.id === product.id);

        // if (!isExistItem) {

        // }
    };

    const removeItems = (id: CartItem["id"]) => {};

    return [cartItems, isLoading, handleAddItemToCart, removeItems] as const;
};
