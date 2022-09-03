import { NextApiHandler } from "next/types";
import {
    GetAllCheckoutByEmailQuery,
    CreateCheckoutItemDocument,
    CreateCheckoutItemMutation,
    CreateCheckoutItemMutationVariables,
    GetAllCheckoutByEmailQueryVariables,
    GetAllCheckoutByEmailDocument,
    UpdateCheckoutMutation,
    UpdateCheckoutMutationVariables,
    UpdateCheckoutDocument,
} from "generated/graphql";
import { authorizedApolloClient } from "graphql/apolloClient";

// a może da się aktualizować tylko checkout przez connection ??

const checkoutHygraphHandler: NextApiHandler = async (req, res) => {
    const { item, email } = await JSON.parse(req.body);
    console.log("🚀 ~ file: update.ts ~ req item", item);

    if (!item || !email) {
        res.status(400).json({ message: "bad request " });
        return;
    }

    const { data } = await authorizedApolloClient.query<
        GetAllCheckoutByEmailQuery,
        GetAllCheckoutByEmailQueryVariables
    >({
        query: GetAllCheckoutByEmailDocument,
        variables: {
            email,
        },
    });

    // const existCheckout = data.checkout?.checkoutItem;
    console.log("🚀 ~ file: u= ~ existCheckout", data);

    // const isExist = data.checkout?.checkoutItem.find((checkout) => {
    //     return checkout.name === item.slug;
    // });

    // if (!isExist) {
    //     const createItem = await authorizedApolloClient.mutate<
    //         CreateCheckoutItemMutation,
    //         CreateCheckoutItemMutationVariables
    //     >({
    //         mutation: CreateCheckoutItemDocument,
    //         variables: {
    //             name: item.slug,
    //             quantity: item.count,
    //             total: item.count * item.price,
    //             slug: item.slug,
    //             email: email,
    //         },
    //     });
    //     res.json({ createItem });
    //     return;
    // }
};

export default checkoutHygraphHandler;
