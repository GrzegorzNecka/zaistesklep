import {
    GetCartItemsDocument,
    GetCartItemsQuery,
    GetCartItemsQueryVariables,
    PublishCartDocument,
    PublishCartMutation,
    PublishCartMutationVariables,
    useCreateCartItemMutation,
    useGetCartItemsByCartIdQuery,
} from "generated/graphql";
import { apolloClient } from "graphql/apolloClient";
import { useSession } from "next-auth/react";
import { Dispatch, SetStateAction, useRef } from "react";
import { CartItem } from "../types";

type AddItemsProps = {
    setIsLoading: Dispatch<SetStateAction<boolean>>;
};

const useAddItems = ({ setIsLoading }: AddItemsProps) => {
    const session = useSession();
    const cartIdRef = useRef<string>("");

    if (session.data?.user?.cartId) {
        cartIdRef.current = session.data.user.cartId;
    }

    //------------------- get initial CartItems from graphQl

    const { data: cartData } = useGetCartItemsByCartIdQuery({
        skip: !Boolean(session.data?.user?.cartId),
        variables: {
            id: cartIdRef.current,
        },
    });

    //-------------------  graphQl mutation

    const [createCartItem, { data, loading: load, error, client }] = useCreateCartItemMutation({
        async update(cache, { data }) {
            const createdItem = data?.create;

            await client.mutate<PublishCartMutation, PublishCartMutationVariables>({
                mutation: PublishCartDocument,
                variables: {
                    cartItemId: createdItem?.id!,
                    cartId: cartIdRef.current,
                },
            });

            const variables = { id: cartIdRef.current };

            const cacheCartItems = cache.readQuery<GetCartItemsQuery, GetCartItemsQueryVariables>({
                query: GetCartItemsDocument,
                variables: { ...variables },
            });

            if (!cacheCartItems) {
                console.log("🚀 ~ cacheCartItems", cacheCartItems); //null
                console.log("🚀 ~ cartIdRef.current", cartIdRef.current);
                // alert("no cacheCartItems");
                // return;
            }

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
                            variables: { id: cartIdRef },
                            data: updatedCashCartItems,
                        });
                    },
                },
            });
            // todo - ta funkcja wykonuje się 2 razy
            console.log("🚀 ~ ", updateCache);
        },
    });

    //-------------------  handle context method addItemToCart

    const handleAddItemToCart = async (product: CartItem) => {
        setIsLoading(true);

        if (!cartData?.cart?.cartItems || !cartData?.cart?.id) {
            alert("!cartData?.cart?.cartItems || !cartData?.cart?.id");
            return;
        }

        const sign = `${session.data?.user.email}_${product.id}`;

        const existCartItems = cartData.cart.cartItems;
        console.log("🚀 ~ existCartItems", existCartItems);

        const isExistItem = existCartItems.find((item) => item?.product?.id === product.id);

        if (!isExistItem) {
            const nextCartItem = await createCartItem({
                variables: {
                    cartId: cartData.cart.id,
                    productId: product.id,
                    sign: sign,
                    quantity: product.count,
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
                        quantity: product.count,
                    },
                },
            });
        }
    };

    return [handleAddItemToCart] as const;
};

export default useAddItems;
