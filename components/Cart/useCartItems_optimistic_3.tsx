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

        console.log("🚀 ~ cartData", cartData);

        /*

        cart
{
    "__typename": "Cart",
    "id": "cl7q56m7a1eqp0ateldaehrcs",
    "cartItems": [
        {
            "__typename": "CartItem",
            "id": "cl8bmo69v0cpt0buphtaslrdw",
            "quantity": 1,
            "product": {
                "__typename": "Product",
                "id": "ckdu44mn40gxh010405uwgbtw",
                "name": "Unisex Long Sleeve Tee",
                "price": 1999,
                "images": [
                    {
                        "__typename": "Asset",
                        "url": "https://media.graphassets.com/TSPnQGujTFC8nwtYMXmz"
                    }
                ],
                "slug": "unisex-long-sleeve-tee"
            }
        },
        {
            "__typename": "CartItem",
            "id": "cl8cx9guvm7wb0duvb1mpfwo8",
            "quantity": 1,
            "product": {
                "__typename": "Product",
                "id": "ckdu48unc0gzq0158mbzvyzg3",
                "name": "Snapback",
                "price": 1299,
                "images": [
                    {
                        "__typename": "Asset",
                        "url": "https://media.graphassets.com/4ltH606Tdu0OYjg6HTrw"
                    }
                ],
                "slug": "snapback"
            }
        }
    ]
}
        */

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

    // graphQl - dodaj do koszyka

    // const [addProduct, { data, loading: load, error, client }] = useAddProductToCartMutation({
    //     update(cache, result) {
    //         console.log("------addProduct result-------", result);

    //         const cacheCartItems = cache.readQuery<GetCartItemsQuery, GetCartItemsQueryVariables>({
    //             query: GetCartItemsDocument,
    //             variables: { id: session.data?.user?.cartId! },
    //         });
    //         console.log("------addProduct result-------cacheCartItems", cacheCartItems);
    //     },
    // });

    //---

    const [createCartItem, { data, loading: load, error, client }] = useCreateCartItemMutation({
        async update(cache, { data }) {
            console.log("------createCartItemMutation result-------", data);

            // cache.modify({
            //     fields: {
            //       sessions(exisitingSessions = []) {
            //         const newSession = data.createSession;
            //         cache.writeQuery({
            //           query: GetCartItemsDocument,
            //           data: { newSession, ...exisitingSessions }
            //         });
            //       }
            //     }
            //   })

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
            console.log("🚀 ~ file: useCartItems.tsx ~ line 116 ~ update ~ cacheCartItems", cacheCartItems);
            /*
            {
                "cart": {
                    "__typename": "Cart",
                    "id": "cl7q56m7a1eqp0ateldaehrcs",
                    "cartItems": [
                        {
                            "__typename": "CartItem",
                            "id": "cl8bmo69v0cpt0buphtaslrdw"
                        }
                    ]
                }
            }
            
            */

            if (!cacheCartItems?.cart?.cartItems || !data?.create) {
                // ... obsługa błędu
                return;
            }

            const updatedCashCartItems = {
                cart: {
                    id: cacheCartItems?.cart?.id!,
                    cartItems: [...cacheCartItems?.cart?.cartItems!, { id: data?.create?.id, __typename: "CartItem" }],
                    __typename: "Cart",
                },
            };
            // console.log("🚀 ~ file: useCartItems.tsx ~ line 125 ~ update ~ updatedCashCartItems", updatedCashCartItems);

            // const updateCache = cache.writeQuery({
            //     query: GetCartItemsDocument,
            //     variables: { id: session.data?.user?.cartId! },
            //     data: updatedCashCartItems,
            // });

            const updateCache = cache.modify({
                // optimistic: true,
                // id: cache.identify(updatedCashCartItems),
                fields: {
                    cart(existCartRef = {}) {
                        console.log("🚀 ~ file: useCartItems.tsx ~ line 143 ~ cart ~ existCartRef)", existCartRef);

                        cache.writeQuery({
                            query: GetCartItemsDocument,
                            variables: { id: session.data?.user?.cartId! },
                            data: updatedCashCartItems,
                        });
                    },
                },
            });

            console.log("🚀 ~ file: useCartItems.tsx ~ line 130 ~ update ~ updateCache", updateCache);
        },
        onCompleted: (data) => {
            console.log("complete", true);
            setLoader(false);
        },
    });

    /**
     *
     *
     *
     */

    const addItems = async (product: CartItem) => {
        console.log("🚀 ~ file: useCartItems.tsx ~ line 147 ~ addItems ~ product", product);
        setLoader(true);
        console.log("-----addItems------");
        console.log("cartData?.cart?.cartItems", cartData?.cart?.cartItems);
        console.log("cartData?.cart?.id", cartData?.cart?.id);
        if (!cartData?.cart?.cartItems || !cartData?.cart?.id) {
            return;
        }

        const sign = `${session.data?.user.email}_${product.id}`;

        const existingItem = cartData.cart.cartItems.find((item) => item?.product?.id === product.id);
        console.log("~  existingItem", existingItem);

        if (!existingItem) {
            // variables: {
            //     review: {
            //         ...data, // --1.1 dane te sąwysłane do serwera
            //         product: {
            //             connect: {
            //                 slug: productSlug, //--1.2 ustawamy zmienną produktu
            //             },
            //         },
            //     },
            // },

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

            /*
             zwraca :
            {
                "create": {
                    "__typename": "CartItem",
                    "quantity": 1,
                    "id": "cl8cx9guvm7wb0duvb1mpfwo8",
                    "sign": "strzypior@gmail.com_ckdu48unc0gzq0158mbzvyzg3",
                    "product": {
                        "__typename": "Product",
                        "id": "ckdu48unc0gzq0158mbzvyzg3"
                    }
                }
            }
            */
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
