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
    console.log("🚀 ~ file: addItem.ts ~ line 17 ~ constaddItemdHandler:NextApiHandler= ~ session", session);

    if (!session?.user.cartId) {
        return;
    }

    const cartId = session.user.cartId;

    const { cartItemId, productId, sign, quantity } = await req.body;
    console.log(
        "🚀 ~ file: addItem.ts ~ line 25 ~ constaddItemdHandler:NextApiHandler= ~ cartItemId, productId, sign, quantity",
        cartItemId,
        productId,
        sign,
        quantity
    );

    await apolloClient.mutate<CreateCartItemMutation, CreateCartItemMutationVariables>({
        mutation: CreateCartItemDocument,
        variables: {
            cartId,
            productId,
            sign,
            quantity,
        },
    });

    await apolloClient.mutate<PublishCartMutation, PublishCartMutationVariables>({
        mutation: PublishCartDocument,
        variables: {
            cartItemId,
            cartId,
        },
        refetchQueries: [
            {
                query: GetCartItemsByCartIdDocument,
                variables: {
                    id: cartId,
                },
            },
        ],
    });

    res.status(200).json({ message: "published cartItem success" });
    return;
};

export default addItemdHandler;
