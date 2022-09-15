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
    useAddProductToCartMutation,
    useClearCartItemsMutation,
    useDeleteCartItemMutation,
    useGetCartIdByAccountIdQuery,
    useGetCartItemsByCartIdQuery,
    usePublishCartItemMutation,
    usePublishCartMutation,
    useUpdateProductQuantityInCartItemMutation,
} from "generated/graphql";

//dodaj RactQuery

export const useCartItems = () => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    const session = useSession();

    const cartId = session?.data?.user.cartId!;

    if (session.status === "authenticated") {
    }

    //! pobierz cartItems

    // const { data: cartId } = useGetCartIdByAccountIdQuery({
    //     variables: {
    //         id: session?.data?.user?.id!,
    //     },
    // });

    const { data, loading, error } = useGetCartItemsByCartIdQuery({
        variables: {
            id: cartId,
        },
    });

    const cartItemsFromServer = data?.cart?.cartItems;

    //----------------------------------------------------------------------------

    useEffect(() => {
        if (!data) return;

        if (!data.cart) return;

        const cartItems = data.cart!.cartItems.map((item) => {
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
    }, [data]);

    //----------------------------------------------------------------------------

    const [addProductToCart] = useAddProductToCartMutation({
        // refetchQueries: [{ query: GetCartItemsByCartIdDocument, variables: { id: cartId } }],
    });

    const [updateProductQuantity] = useUpdateProductQuantityInCartItemMutation({
        // refetchQueries: [{ query: GetCartItemsByCartIdDocument, variables: { id: cartId } }],
    });

    const [publishCartItem] = usePublishCartItemMutation({
        refetchQueries: [{ query: GetCartItemsByCartIdDocument, variables: { id: cartId } }],
    });

    const [publishCart] = usePublishCartMutation({
        refetchQueries: [{ query: GetCartItemsByCartIdDocument, variables: { id: cartId } }],
    });

    //! aktualizuj Cart ustawiając cartItems jako []
    // const [clearCartItemsMutation] = useClearCartItemsMutation({
    //     refetchQueries: [
    //         {
    //             query: GetCartItemsByCartIdDocument,
    //             variables: {
    //                 id: cartId,
    //             },
    //         },
    //     ],
    //     onCompleted: (data) => {
    //         console.log("clearCartItemsMutation complete", data);
    //     },
    // });

    //! usuń koszyk # refetchQueries

    // const [deleteCartItemMutation] = useDeleteCartItemMutation({
    //     refetchQueries: [
    //         {
    //             query: GetCartItemsByCartIdDocument,
    //             variables: {
    //                 id: cartId,
    //             },
    //         },
    //     ],
    //     onCompleted: (data) => {
    //         console.log("deleteCartItemMutation complete", data);
    //     },
    // });

    const addItems = async (product: CartItem) => {
        if (!cartItemsFromServer) {
            return;
        }

        const existingItem = cartItemsFromServer.find((prevItem) => prevItem?.product?.id === product.id);

        if (!existingItem) {
            const newCartItem = await addProductToCart({
                variables: {
                    cartId: cartId,
                    productId: product.id,
                },
            });

            const updateCartItems = newCartItem.data?.updateCart?.cartItems;

            await publishCartItem({
                variables: {
                    cartItemId: updateCartItems?.at(updateCartItems?.length - 1)?.id!,
                },
            });

            await publishCart({
                variables: {
                    cartId,
                },
            });
            return;
        }

        console.log("cartId", cartId);
        console.log("cartItemId", existingItem.id);
        console.log("quantity", existingItem?.quantity);

        const incrementProductQuantity = await updateProductQuantity({
            variables: {
                cartId: cartId,
                cartItemId: existingItem.id,
                quantity: existingItem?.quantity! + 1,
            },
        });

        await publishCartItem({
            variables: {
                cartItemId: existingItem.id,
            },
        });

        await publishCart({
            variables: {
                cartId,
            },
        });
    };

    const removeItems = (id: CartItem["id"]) => {};

    // const addItems = (item: CartItem) => {
    //     setCartItems((prevState = []) => {
    //         const existingItem = prevState.find((prevItem) => prevItem.id === item.id);

    //         if (!existingItem) {
    //             return [...prevState, item];
    //         }

    //         return prevState.map((prevItem) => {
    //             if (prevItem.id === item.id) {
    //                 return {
    //                     ...prevItem,
    //                     count: prevItem.count + 1,
    //                 };
    //             }

    //             return prevItem;
    //         });
    //     });
    // };

    // const removeItems = (id: CartItem["id"]) => {
    //     setCartItems((prevState = []) => {
    //         const existingItem = prevState.find((eItem) => eItem.id === id);

    //         if (existingItem && existingItem.count <= 1) {
    //             return prevState.filter((eItem) => eItem.id !== id);
    //         }

    //         return prevState.map((eItem) => {
    //             if (eItem.id === id) {
    //                 return {
    //                     ...eItem,
    //                     count: eItem.count - 1,
    //                 };
    //             }
    //             return eItem;
    //         });
    //     });
    // };

    return [cartItems, addItems, removeItems] as const;
};
