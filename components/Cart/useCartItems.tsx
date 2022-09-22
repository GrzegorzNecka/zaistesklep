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
    PublishCartDocument,
    PublishCartItemDocument,
    PublishCartItemMutation,
    PublishCartItemMutationVariables,
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

    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [loader, setLoader] = useState<boolean>(false);

    const { data: cartData } = useGetCartItemsByCartIdQuery({
        skip: !Boolean(session.data?.user?.cartId),
        variables: {
            id: session.data?.user?.cartId!,
        },
        onCompleted: (data) => {},
        onError: (error) => {},
    });

    // zaktualizuj  Contenxt
    useEffect(() => {
        if (session.status !== "authenticated" || !cartData || !cartData.cart) {
            return;
        }

        const cartItems = cartData.cart.cartItems.map((item) => {
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
    }, [cartData, session]);

    const [createCartItem, { data, loading: load, error, client }] = useCreateCartItemMutation({
        async update(cache, { data }) {
            const createdItem = data?.create;

            await client.mutate<PublishCartItemMutation, PublishCartItemMutationVariables>({
                mutation: PublishCartItemDocument,
                variables: {
                    cartItemId: createdItem?.id!,
                },
            });

            const cacheCartItems = cache.readQuery<GetCartItemsQuery, GetCartItemsQueryVariables>({
                query: GetCartItemsDocument,
                variables: { id: session.data?.user?.cartId! },
            });

            if (!cacheCartItems?.cart?.cartItems || !data?.create) {
                // ... obsługa błędu
                return;
            }

            // optimisticResponse:
            const updatedCashCartItems = {
                cart: {
                    id: cacheCartItems?.cart?.id!,
                    cartItems: [...cacheCartItems?.cart?.cartItems!, { id: data?.create?.id, __typename: "CartItem" }],
                    __typename: "Cart",
                },
            };

            const updateCache = cache.modify({
                fields: {
                    cart() {
                        cache.writeQuery({
                            query: GetCartItemsDocument,
                            variables: { id: session.data?.user?.cartId! },
                            data: updatedCashCartItems,
                        });
                    },
                },
            });

            console.log("🚀 ~ updateCache", updateCache);
        },
        onCompleted: (data) => {
            setLoader(false);
        },
    });

    /**
     *
     *
     *
     */

    const addItems = async (product: CartItem) => {
        setLoader(true);
        console.log("-----addItems------");

        if (!cartData?.cart?.cartItems || !cartData?.cart?.id) {
            return;
        }

        const sign = `${session.data?.user.email}_${product.id}`;

        const existingItem = cartData.cart.cartItems.find((item) => item?.product?.id === product.id);
        console.log("~  existingItem", existingItem);

        //---------------------------------

        if (!existingItem) {
            const newCartItem = await createCartItem({
                variables: {
                    cartId: cartData.cart.id,
                    productId: product.id,
                    sign: sign,
                },

                optimisticResponse: {
                    __typename: "Mutation",
                    create: {
                        __typename: "CartItem",
                        id: (-Math.random()).toString(32),
                        product: {
                            __typename: "Product",
                            id: product.id,
                        },
                        quantity: 1,
                        sign: sign,
                    },
                },
            });

            console.log("🚀 ~ file: useCartItems.tsx ~ line 178 ~ addItems ~ newCartItem", newCartItem);
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
