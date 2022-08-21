import { NextApiHandler } from "next/types";
import Stripe from "stripe";
import { buffer } from "micro";
import { StripeWebhookEvents } from "stripeEvents";

export const config = {
    api: {
        bodyParser: false,
    },
};

const stripeWebhook: NextApiHandler = async (req, res) => {
    const stripeKey = process.env.STRIPE_SECRET_KEY;
    const StripeEndpointWebhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

    console.log(req.headers);
    const buf = await buffer(req);
    const sig = req.headers["stripe-signature"];

    console.log("stripeKey", stripeKey);
    console.log("sig", sig);
    console.log("StripeEndpointWebhookSecret", StripeEndpointWebhookSecret);

    if (!stripeKey || !StripeEndpointWebhookSecret || !sig) {
        res.status(500).json({ message: "Missing STRIPE_SECRET_KEY!" });
        return;
    }

    const stripe = new Stripe(stripeKey, { apiVersion: "2022-08-01" });
    // const event = req.body as StripeWebhookEvents;

    try {
        const event = stripe.webhooks.constructEvent(buf, sig, StripeEndpointWebhookSecret) as StripeWebhookEvents;
        console.log("🚀 ~ file: stripe-webhook-.ts ~ line 39 ~ conststripeWebhook:NextApiHandler= ~ event", event);

        switch (
            event.type
            // case "payment_intent.succeeded":
            //     const offerId = event.data.object.metadata.id;
            //     console.log("🚀 offerId", offerId);
            //     // @todo zaktualizuj zamówienie w GraphCms

            //     return;
            // case "checkout.session.completed":
            //     console.log("heckout.session.completed -status", event.type);
            //     // @todo zaktualizuj zamówienie w GraphCms
            //     return;
            // case "checkout.session.async_payment_failed":
            //     console.log("checkout.session.async_payment_failed status", event.data.object.status);
            //     // @todo zaktualizuj zamówienie w GraphCms
            //     return;
            // case "checkout.session.async_payment_succeeded":
            //     console.log("checkout.session.async_payment_succeeded status", event.data.object.status);
            //     // @todo zaktualizuj zamówienie w GraphCms
            //     return;
        ) {
        }

        res.json({ received: true });
    } catch (err) {
        let message = "stripe webhook error";
        if (err instanceof Error) {
            message = err.message;
        }

        res.status(400).send(`Webhook Error: ${message}`);
    }
};

export default stripeWebhook;
