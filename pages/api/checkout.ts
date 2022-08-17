import {
    GetProductBySlugDocument,
    GetProductBySlugQueryVariables,
    GetProductDetailsBySlugQuery,
} from "generated/graphql";
import { apolloClient } from "graphql/apolloClient";
import { NextApiHandler } from "next/types";
import Stripe from "stripe";

const checkoutHandler: NextApiHandler = async (req, res) => {
    console.log("🚀 ~ file: checkout.ts ~ line 5 ~ constcheckoutHandler:NextApiHandler= ~ req", req.body);
    const stripeKey = process.env.STRIPE_SECRET_KEY;

    if (!stripeKey) {
        res.status(500).json({ message: "Missing STRIPE_SECRET_KEY!" });
        return;
    }

    const body = JSON.parse(req.body) as {
        slug: string;
        count: number;
    }[];

    console.log("🚀 ~ file: checkout.ts ~ line 20 ~ constcheckoutHandler:NextApiHandler= ~ body", body);

    const products = await Promise.all(
        body.map(async (cartItem) => {
            const product = await apolloClient.query<GetProductDetailsBySlugQuery, GetProductBySlugQueryVariables>({
                query: GetProductBySlugDocument,
                variables: { slug: cartItem.slug },
            });

            // product.data.product

            return {
                product,
                count: cartItem.count,
            };
        })
    );

    // console

    // const stripe = new Stripe(stripeKey, { apiVersion: "2020-08-27" });

    const stripe = new Stripe(stripeKey, { apiVersion: "2022-08-01" });

    const stripeCheckoutSession = await stripe.checkout.sessions.create({
        locale: "pl",
        payment_method_types: ["p24", "card"],
        success_url: `${process.env.NEXT_PUBLIC_HOST}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${process.env.NEXT_PUBLIC_HOST}/checkout/cancel`,
        // line_items: JSON.parse(req.body),
        line_items: products.map((product) => {
            return {
                adjustable_quantity: {
                    enabled: true,
                    minimum: 0,
                    maximum: product.count,
                },
                price_data: {
                    currency: "PLN",
                    unit_amount: product.product.data.product?.price,
                    product_data: {
                        name: product.product.data.product?.name,
                        images: product.product.data.product?.images.map((i) => i.url),
                        metadata: {
                            slug: product.product.data.product?.slug,
                            id: product.product.data.product?.id,
                        },
                    },
                },
                quantity: product.count,
            };
        }),
        mode: "payment",

        // stworzenie order z tego miejsca w graphCMS
    });

    res.status(201).json({ session: stripeCheckoutSession });
};

export default checkoutHandler;
