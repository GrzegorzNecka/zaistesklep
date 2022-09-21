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

    const { data, loading } = useGetCartItemsByCartIdQuery({
        // skip: !Boolean(session.data?.user?.cartId),
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
        if (session.status !== "authenticated" || !data || !data.cart) {
            return;
        }
        console.log("useEffect, cartItems", data);
        const cartItems = data.cart.cartItems.map((item) => {
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
    }, [data, session]);

    /**
     *
     *
     *
     */

    const [addProduct, { data: newProductData, loading: newProductLoading, error, client }] =
        useAddProductToCartMutation({
            update(cache, result) {
                console.log("result", result);

                const cartFromServer = result?.data?.updateCart;
                console.log("🚀 ~ cartFromServer", cartFromServer);

                const cartItemsfromCashe = cache.readQuery<GetCartItemsQuery, GetCartItemsQueryVariables>({
                    query: GetCartItemsDocument,
                    variables: { id: session.data?.user?.cartId! },
                });

                // const existingItem = cartItemsfromCashe?.cart?.cartItems.find(
                //     (prevItem) => prevItem?.product?.id === product.id
                // );

                // if (!existingItem) {
                //     const newCartItem = await handleAddItems(data.cart.id, product.id);

                //     return;
                // }

                console.log("🚀 ~ cartItemsfromCashe", cartItemsfromCashe?.cart?.cartItems);
            },
        });

    // const [publishCartItem] = usePublishCartItemMutation({
    //     refetchQueries: [
    //         {
    //             query: GetCartItemsByCartIdDocument,
    //             variables: {
    //                 id: session.data?.user?.cartId!,
    //             },
    //         },
    //     ],
    //     onCompleted: (data) => {
    //         console.log("addProductToCartMutation", data);
    //         setLoader(false);
    //         setPermission(true);
    //     },
    // });

    const handleAddItems = async (cartId: string, productId: string) => {
        // setPermission(false);
        // const add = await addProductToCartMutation({
        //     mutation: AddProductToCartDocument,
        //     variables: {
        //         cartId,
        //         productId,
        //     },
        // });

        // const addedCartItems = add.data?.updateCart?.cartItems;
        // await publishCartItem({
        //     variables: {
        //         cartItemId: addedCartItems?.at(addedCartItems?.length - 1)?.id!,
        //     },
        // });

        const add = await addProduct({
            variables: {
                cartId,
                productId,
            },
        });
        console.log("🚀 ~ file: useCartItems.tsx ~ line 137 ~ addProduct ~  add ", add);
    };

    /**
     *
     *
     *
     */

    useEffect(() => {
        // if (loading) {
        //     setLoader(loading);
        //     console.log("loading");
        // }
        // if (newProductLoading) {
        //     setLoader(newProductLoading);
        //     console.log("loading");
        // }
    }, [loading, newProductLoading]);

    const addItems = async (product: CartItem) => {
        if (!permisson) {
            return;
        }

        if (!data?.cart?.cartItems || !data?.cart?.id) {
            return;
        }

        const existingItem = data.cart.cartItems.find((prevItem) => prevItem?.product?.id === product.id);

        if (!existingItem) {
            const newCartItem = await handleAddItems(data.cart.id, product.id);

            return;
        }
    };

    /**
     *
     *
     *
     */

    const removeItems = (id: CartItem["id"]) => {};

    return [cartItems, loader, addItems, removeItems] as const;
};
