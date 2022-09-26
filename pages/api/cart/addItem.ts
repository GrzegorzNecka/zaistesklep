import { authOptions } from "pages/api/auth/[...nextauth]";
import { unstable_getServerSession } from "next-auth/next";
import { NextApiHandler } from "next/types";
import { apolloClient } from "graphql/apolloClient";
import {
    CreateCartItemMutation,
    CreateCartItemMutationVariables,
    CreateCartItemDocument,
    PublishCartMutation,
    PublishCartMutationVariables,
    PublishCartDocument,
    GetCartItemsByCartIdDocument,
} from "generated/graphql";

const addItemdHandler: NextApiHandler = async (req, res) => {
    const session = await unstable_getServerSession(req, res, authOptions);

    if (!session?.user.cartId) {
        return;
    }

    const cartId = session.user.cartId;

    const { productId, sign, quantity } = await JSON.parse(req.body);

    const nextCartItem = await apolloClient.mutate<CreateCartItemMutation, CreateCartItemMutationVariables>({
        mutation: CreateCartItemDocument,
        variables: {
            cartId,
            productId,
            sign,
            quantity,
        },
    });
    console.log("🚀 ~ file: addItem.ts ~ line 36 ~ constaddItemdHandler:NextApiHandler= ~ nextCartItem", nextCartItem);

    if (!nextCartItem?.data?.create?.id) {
        res.status(500).json({ message: "createCartItemMutation failed" });
        return;
    }

    const nextCart = await apolloClient.mutate<PublishCartMutation, PublishCartMutationVariables>({
        mutation: PublishCartDocument,
        variables: {
            cartItemId: nextCartItem.data.create.id,
            cartId,
        },
    });

    if (!nextCartItem?.data?.create?.id) {
        res.status(500).json({ message: "createCartItemMutation failed" });
        return;
    }

    console.log("🚀 nextCart", nextCart);

    res.status(200).json({ nextCart: JSON.stringify(nextCart) });
    return;
};

export default addItemdHandler;
