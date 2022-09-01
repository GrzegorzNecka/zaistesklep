import {
    CreateCheckoutItemDocument,
    CreateCheckoutItemMutation,
    CreateCheckoutItemMutationVariables,
} from "generated/graphql";
import { authorizedApolloClient } from "graphql/apolloClient";
import { NextApiHandler } from "next/types";

const checkoutHandler: NextApiHandler = async (req, res) => {
    const { item, email } = JSON.parse(req.body);
    console.log("🚀 ~ file: update.ts ~ email", item, email);

    const variables = {
        data: {
            quantity: item.count,
            total: item.count * item.price,
            product: {
                connect: {
                    slug: item.slug,
                },
            },
            checkout: {
                connect: {
                    email: email,
                },
            },
        },
    };

    const createItem = await authorizedApolloClient.mutate<
        CreateCheckoutItemMutation,
        CreateCheckoutItemMutationVariables
    >({
        mutation: CreateCheckoutItemDocument,
        variables,
    });

    console.log("🚀 ~ file: update.ts ~ line 32 ~ constcheckoutHandler:NextApiHandler= ~ createItem", createItem);

    console.log("🚀 ~ updateItem ", createItem);

    res.json({ createItem });
};

export default checkoutHandler;
