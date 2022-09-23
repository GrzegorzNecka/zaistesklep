import {
    CartItem,
    GetCartItemsByCartIdQuery,
    GetCartItemsDocument,
    GetCartItemsQuery,
    GetCartItemsQueryVariables,
    PublishCartDocument,
    PublishCartMutation,
    PublishCartMutationVariables,
    useCreateCartItemMutation,
} from "generated/graphql";
import { useSession } from "next-auth/react";
import { Dispatch, SetStateAction } from "react";

type AddItemsProps = {
    setLoader: Dispatch<SetStateAction<boolean>>;
    cartData: GetCartItemsByCartIdQuery | undefined;
};

const useAddItems = ({ setLoader, cartData }: AddItemsProps) => {
    const session = useSession();
    /**
     *
     *
     *
     *
     */
    const [createCartItem, { data, loading: load, error, client }] = useCreateCartItemMutation({
        async update(cache, { data }) {
            console.log("------createCartItemMutation result-------", data);

            const createdItem = data?.create;

            await client.mutate<PublishCartMutation, PublishCartMutationVariables>({
                mutation: PublishCartDocument,
                variables: {
                    cartItemId: createdItem?.id!,
                    cartId: session.data?.user?.cartId!,
                },
            });

            const cacheCartItems = cache.readQuery<GetCartItemsQuery, GetCartItemsQueryVariables>({
                query: GetCartItemsDocument,
                variables: { id: session.data?.user?.cartId! },
            });
            console.log("🚀 ~ file: useCartItems.tsx ~ line 116 ~ update ~ cacheCartItems", cacheCartItems);

            const updatedCashCartItems = {
                cart: {
                    id: cacheCartItems?.cart?.id!,
                    cartItems: [...cacheCartItems?.cart?.cartItems!, { id: data?.create?.id, __typename: "CartItem" }],
                    __typename: "Cart",
                },
            };
            console.log("🚀 ~ file: useCartItems.tsx ~ line 125 ~ update ~ updatedCashCartItems", updatedCashCartItems);

            // const updateCache = cache.writeQuery({
            //     query: GetCartItemsDocument,
            //     variables: { id: session.data?.user?.cartId! },
            //     data: updatedCashCartItems,
            // });

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

            console.log("🚀 ~ file: useCartItems.tsx ~ line 130 ~ update ~ updateCache", updateCache);
        },
        onCompleted: (data) => {
            // setLoader(false);
        },
    });

    /**
     *
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
                        // sign: sign,
                    },
                },
            });

            console.log("🚀 ~ file: useCartItems.tsx ~ line 178 ~ addItems ~ newCartItem", newCartItem);
        }
    };

    return [addItems] as const;
};

export default useAddItems;
