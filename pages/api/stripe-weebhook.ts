import { NextApiHandler } from "next/types";
import { StripeWebhookEvents } from "stripeEvents";

const stripeWebhook: NextApiHandler = (req, res) => {
    //@todo verify signing secret

    const event = req.body as StripeWebhookEvents;

    switch (event.type) {
        case "checkout.session.completed":
            event.data.object.id;
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
};

// whsec_34d50c687371f7d7dba4023a90fe5a8d2997d2587bce1d8b8759a1765d472fde
export default stripeWebhook;
