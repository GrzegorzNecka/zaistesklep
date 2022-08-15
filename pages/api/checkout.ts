import { NextApiHandler } from "next/types";
import Stripe from "stripe";

const checkoutHandler: NextApiHandler = async (req, res) => {
    console.log("🚀 ~ file: checkout.ts ~ line 5 ~ constcheckoutHandler:NextApiHandler= ~ req", req.body);
    const stripeKey = process.env.STRIPE_SECRET_KEY;

    if (!stripeKey) {
        res.status(500).json({ message: "Missing STRIPE_SECRET_KEY!" });
        return;
    }

    // const stripe = new Stripe(stripeKey, { apiVersion: "2020-08-27" });

    const stripe = new Stripe(stripeKey, { apiVersion: "2022-08-01" });

    const stripeCheckoutSession = await stripe.checkout.sessions.create({
        locale: "pl",
        payment_method_types: ["p24", "card"],
        success_url: `${process.env.NEXT_PUBLIC_HOST}/checkout/sucess?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${process.env.NEXT_PUBLIC_HOST}/checkout/cancel`,
        line_items: JSON.parse(req.body),
        mode: "payment",

        // line_items: [
        //     {
        //         price_data: {
        //             currency: "PLN",
        //             unit_amount: 1999,
        //             product_data: {
        //                 name: "Unisex Long Sleeve Tee",
        //             },
        //         },
        //         quantity: 1,
        //     },
        //     { price_data: { currency: "PLN", unit_amount: 1299, product_data: { name: "Snapback" } }, quantity: 1 },
        // ],
    });

    res.status(201).json({ session: stripeCheckoutSession });
};

export default checkoutHandler;
