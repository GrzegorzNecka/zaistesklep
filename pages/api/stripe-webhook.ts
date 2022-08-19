import { NextApiHandler } from "next/types";
import { StripeWebhookEvents } from "stripeEvents";

const stripeWebhook: NextApiHandler = (req, res) => {
    //@todo verify signing secret
    // sprawdźczy żądanie zostało wysłane przez stripea, jęsli nie to return

    const event = req.body as StripeWebhookEvents;
    console.log("🚀 ~ file: stripe-weebhook.ts ~ line 9 ~ event", event);

    switch (event.type) {
        case "checkout.session.completed":
            event.data.object.id;
            console.log("🚀 ~ file: stripe-weebhook.ts ~ line 14 ~    event.data.object.id;", event.data.object.id);
            // @todo zaktualizuj zamówienie w GraphCms
            return;
        case "checkout.session.async_payment_failed":
            // @todo zaktualizuj zamówienie w GraphCms
            return;
        case "checkout.session.async_payment_succeeded":
            // @todo zaktualizuj zamówienie w GraphCms
            return;
    }
    res.status(204).end();
    return;
};

export default stripeWebhook;
