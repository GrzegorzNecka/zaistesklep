import { NextApiHandler } from "next/types";
import { authApolloClient } from "graphql/apolloClient";
import {
    PublishCartItemMutation,
    PublishCartItemMutationVariables,
    PublishCartItemDocument,
    GetCartItemsByCartIdDocument,
    PublishCartDocument,
    PublishCartMutation,
    PublishCartMutationVariables,
} from "generated/graphql";

const publishProductByCartIdHandler: NextApiHandler = async (req, res) => {
    const { cartId, cartItemId } = await req.body;

    if (!cartId || !cartItemId) {
        res.status(400).json({ message: "bad request" });
    }

    const publishCartItem = await authApolloClient.mutate<PublishCartItemMutation, PublishCartItemMutationVariables>({
        mutation: PublishCartItemDocument,
        variables: {
            cartItemId,
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

    const publishCart = await authApolloClient.mutate<PublishCartMutation, PublishCartMutationVariables>({
        mutation: PublishCartDocument,
        variables: {
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

    if (!publishCartItem) {
        res.status(500).json({ message: "something was wrong with PublishCartItemMutation" });
    }

    res.status(200).json({ message: "published cartItem success" });
    return;
};

export default publishProductByCartIdHandler;
