import { useState, useEffect, useMemo, useCallback } from "react";
// import { getCartSessionToken } from "./services/localStorage";
import { CartItem } from "components/Cart/types";
import { fetchCartItems, getCartSessionToken, updateCartItems } from "./services/zadanie_cartItems";
import { useSession } from "next-auth/react";
import { apolloClient } from "graphql/apolloClient";
import {
    AddProductToCartDocument,
    GetCartIdByAccountIdQuery,
    GetCartIdByAccountIdQueryVariables,
    GetCartItemsByCartIdDocument,
    GetCartItemsByCartIdQuery,
    GetCartItemsByCartIdQueryVariables,
    GetCartItemsDocument,
    GetCartItemsQuery,
    GetCartItemsQueryVariables,
    Scalars,
    useAddProductToCartMutation,
    useClearCartItemsMutation,
    useCreateCartItemMutation,
    useDeleteCartItemMutation,
    useGetCartIdByAccountIdQuery,
    useGetCartItemsByCartIdQuery,
    usePublishCartItemMutation,
    usePublishCartMutation,
    useUpdateProductQuantityInCartItemMutation,
} from "generated/graphql";
import { gql } from "@apollo/client";

export const useCartItems = () => {
    const session = useSession();

    const [permisson, setPermission] = useState(true);
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [loader, setLoader] = useState<boolean>(false);

    const { data: cartByAccount, loading } = useGetCartItemsByCartIdQuery({
        skip: !Boolean(session.data?.user?.cartId),
        variables: {
            id: session.data?.user?.cartId!,
        },
        onCompleted: (data) => {
            // console.log("useGetCartItemsByCartIdQuery - data", data);
            // setLoader(false);
            // i tutaj publikuj
        },
        onError: (error) => {
            // console.log("useGetCartItemsByCartIdQuery - error", error);
        },
    });

    /**
     *
     *
     *
     */

    useEffect(() => {
        if (session.status !== "authenticated" || !cartByAccount || !cartByAccount.cart) {
            return;
        }
        console.log("useEffect, cartItems", cartByAccount);
        const cartItems = cartByAccount.cart.cartItems.map((item) => {
            return {
                id: item.product!.id,
                price: item.product!.price,
                title: item.product!.name,
                count: item.quantity,
                imgUrl: item.product!.images[0].url,
                slug: item.product!.slug,
            };
        });

        setCartItems(cartItems);
    }, [cartByAccount, session]);

    /**
     *
     *
     *
     */

    const [addProduct, { data, loading: load, error, client }] = useAddProductToCartMutation({
        update(cache, result) {
            console.log("------result-------", result);

            const cartItemsfromCashe = cache.readQuery<GetCartItemsQuery, GetCartItemsQueryVariables>({
                query: GetCartItemsDocument,
                variables: { id: session.data?.user?.cartId! },
            });

            console.log("🚀 ~ cartItemsfromCashe", cartItemsfromCashe?.cart?.cartItems);
        },
    });

    //---

    const [createCartItemMutation] = useCreateCartItemMutation({
        update(cache, result) {
            console.log("------result-------", result);

            // const cartItemsfromCashe = cache.readQuery<GetCartItemsQuery, GetCartItemsQueryVariables>({
            //     query: GetCartItemsDocument,
            //     variables: { id: session.data?.user?.cartId! },
            // });

            // console.log("🚀 ~ cartItemsfromCashe", cartItemsfromCashe?.cart?.cartItems);
        },
    });

    /**
     *
     *
     *
     */

    const handleAddItems = async (cartId: string, productId: string) => {
        const add = await addProduct({
            variables: {
                cartId,
                productId,
                sign: `${session.data?.user.email}_${productId}`,
            },
        });
        // const add = await createCartItemMutation({
        //     variables: {
        //         cartId,
        //         productId,
        //         sign: `${session.data?.user.email}_${productId}`,
        //     },
        // });
    };

    /**
     *
     *
     *
     */

    const addItems = async (product: CartItem) => {
        if (!permisson) {
            return;
        }

        if (!cartByAccount?.cart?.cartItems || !cartByAccount?.cart?.id) {
            return;
        }

        const sign = `${session.data?.user.email}_${product.id}`;
        console.log("🚀 ~ file: useCartItems.tsx ~ line 150 ~ addItems ~  sign", sign);

        const cache = apolloClient.cache.readQuery<GetCartItemsQuery, GetCartItemsQueryVariables>({
            query: GetCartItemsDocument,
            variables: { id: session.data?.user?.cartId! },
        });

        console.log("🚀 ~  cartItemsfromCashe333 ", cache?.cart?.cartItems);

        // const existingItem = cache?.cart?.cartItems.find((prevItem) => prevItem?.product?.id === product.id);

        // const existingItem = cartItemsfromCashe.find((item) => item.id === product.id);
        // console.log("🚀 ~ file: useCartItems.tsx ~ line 161 ~ addItems ~ existingItem", existingItem);

        // if (!existingItem) {
        //     const newCartItem = await handleAddItems(data.cart.id, product.id);

        //     return;
        // }

        const newCartItem = await handleAddItems(cartByAccount.cart.id, product.id);
    };

    /**
     *
     *
     *
     */

    const removeItems = (id: CartItem["id"]) => {};

    return [cartItems, loader, addItems, removeItems] as const;
};
