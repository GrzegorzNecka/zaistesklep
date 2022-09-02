import { NextApiHandler } from "next/types";
import {
    CheckoutItemCreateInput,
    CreateCheckoutItemDocument,
    CreateCheckoutItemMutation,
    CreateCheckoutItemMutationVariables,
} from "generated/graphql";
import { authorizedApolloClient } from "graphql/apolloClient";

// a może da się aktualizować tylko checkout przez connection ??

const checkoutHygraphHandler: NextApiHandler = async (req, res) => {
    const { item, email } = await JSON.parse(req.body);

    // 1 - jeśli produkt istniej w checkout item to zaktualizuj produkt o ilość

    // ----- query checkout

    // - sprawdź czy element istniej

    //------ mutation update

    // - zaktualizuj checkout item

    // 2 - jeśli produkt nie istnieje to :

    const createItem = await authorizedApolloClient.mutate<
        CreateCheckoutItemMutation,
        CreateCheckoutItemMutationVariables
    >({
        mutation: CreateCheckoutItemDocument,
        variables: {
            name: item.title,
            quantity: item.count,
            total: item.count * item.price,
            slug: item.slug,
            email: email,
        },
    });

    res.json({ createItem });
};

export default checkoutHygraphHandler;
