import { useState, useEffect, useMemo, useCallback } from "react";
// import { getCartSessionToken } from "./services/localStorage";
import { CartItem } from "components/Cart/types";
import { fetchCartItems, getCartSessionToken, updateCartItems } from "./services/zadanie_cartItems";
import { useSession } from "next-auth/react";
import { apolloClient } from "graphql/apolloClient";
import {
    GetCartIdByAccountIdQuery,
    GetCartIdByAccountIdQueryVariables,
    GetCartItemsByCartIdDocument,
    GetCartItemsByCartIdQuery,
    GetCartItemsByCartIdQueryVariables,
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

export const useCartItems = () => {
    const session = useSession();
    //server
    const [cartId, setCartId] = useState<Scalars["ID"] | null>(null);
    const [data, setData] = useState<GetCartItemsByCartIdQuery | null>(null);
    //context
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    /*

     -----------------------------------------------------------------
     zrób to jednak na usemutation i jeśli po klinięiu jest status loading to zablokuj
     */
    useEffect(() => {
        if (session.status !== "authenticated" || !session.data.user.cartId) {
            return;
        }

        setCartId(session.data.user.cartId);

        if (!cartId) {
            return;
        }

        const getCartItems = async () => {
            const cartItems = await apolloClient.query<GetCartItemsByCartIdQuery, GetCartItemsByCartIdQueryVariables>({
                query: GetCartItemsByCartIdDocument,
                variables: { id: cartId },
            });

            const dataFromServer = cartItems?.data;

            if (!dataFromServer) {
                return;
            }

            setData(dataFromServer);
        };

        getCartItems();
    }, [cartId, session]);
    /*

     -----------------------------------------------------------------

     */

    const getCartItemsByCartIdQuery = () => {
        if (session.status !== "authenticated" || !session.data.user.cartId) {
            return;
        }

        setCartId(session.data.user.cartId);

        if (!cartId) {
            return;
        }

        const getCartItems = async () => {
            const cartItems = await apolloClient.query<GetCartItemsByCartIdQuery, GetCartItemsByCartIdQueryVariables>({
                query: GetCartItemsByCartIdDocument,
                variables: { id: cartId },
            });

            const dataFromServer = cartItems?.data;

            if (!dataFromServer) {
                return;
            }

            setData(dataFromServer);
        };

        getCartItems();
    };

    /*

     -----------------------------------------------------------------

     */
    useEffect(() => {
        if (session.status !== "authenticated" || !data || !data.cart) {
            return;
        }

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
    /*

     -----------------------------------------------------------------

     */
    const [addProductToCartMutation] = useAddProductToCartMutation({
        // refetchQueries: [{ query: GetCartItemsByCartIdDocument, variables: { id: cartId } }],
    });

    const [updateProductQuantityMutation] = useUpdateProductQuantityInCartItemMutation({
        // refetchQueries: [{ query: GetCartItemsByCartIdDocument, variables: { id: cartId } }],
    });

    const [publishCartItemMutation] = usePublishCartItemMutation({
        refetchQueries: [{ query: GetCartItemsByCartIdDocument, variables: { id: cartId } }],
    });

    const [publishCartMutation] = usePublishCartMutation({
        refetchQueries: [{ query: GetCartItemsByCartIdDocument, variables: { id: cartId } }],
    });
    /*

     -----------------------------------------------------------------

     */
    const addItems = async (product: CartItem) => {
        if (!data?.cart?.cartItems || !data?.cart?.id) {
            return;
        }

        const existingItem = data.cart.cartItems.find((prevItem) => prevItem?.product?.id === product.id);

        if (!existingItem) {
            const newCartItem = await addProductToCartMutation({
                variables: {
                    cartId: data.cart.id,
                    productId: product.id,
                },
            });

            const updateCartItems = newCartItem.data?.updateCart?.cartItems;

            await publishCartItemMutation({
                variables: {
                    cartItemId: updateCartItems?.at(updateCartItems?.length - 1)?.id!,
                },
            });

            await publishCartMutation({
                variables: {
                    cartId: data.cart.id,
                },
            });

            getCartItemsByCartIdQuery();
            return;
        }

        console.log("cartId", cartId);
        console.log("cartItemId", existingItem.id);
        console.log("quantity", existingItem?.quantity);

        const incrementProductQuantity = await updateProductQuantityMutation({
            variables: {
                cartId: data.cart.id,
                cartItemId: existingItem.id,
                quantity: existingItem?.quantity! + 1,
            },
        });

        await publishCartItemMutation({
            variables: {
                cartItemId: existingItem.id,
            },
        });

        await publishCartMutation({
            variables: {
                cartId: data.cart.id,
            },
        });

        getCartItemsByCartIdQuery();
    };
    /*

     -----------------------------------------------------------------

     */
    const removeItems = (id: CartItem["id"]) => {};

    return [cartItems, addItems, removeItems] as const;
};
