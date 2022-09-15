import { NextApiHandler } from "next/types";
import { authApolloClient } from "graphql/apolloClient";
import {
    PublishCartMutation,
    PublishCartDocument,
    PublishCartMutationVariables,
    GetCartItemsByCartIdDocument,
} from "generated/graphql";

const publishProductByCartIdHandler: NextApiHandler = async (req, res) => {
    const { cartId } = await req.body;

    if (!cartId) {
        res.status(400).json({ message: "bad request" });
    }

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

    if (!publishCart) {
        res.status(500).json({ message: "something was wrong with PublishCartItemMutation" });
    }

    res.status(200).json({ message: "published cartItem success" });
    return;
};

export default publishProductByCartIdHandler;
