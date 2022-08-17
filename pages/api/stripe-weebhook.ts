import { NextApiHandler } from "next/types";
import { StripeWebhookEvents } from "stripeEvents";

const stripeWebhook: NextApiHandler = (req, res) => {
    //@todo verify signing secret
    // sprawdźczy żądanie zostało wysłane przez stripea, jęsli nie to return

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

whsec_34d50c687371f7d7dba4023a90fe5a8d2997d2587bce1d8b8759a1765d472fde;
export default stripeWebhook;

/*
https://dashboard.stripe.com/test/webhooks
https://dashboard.stripe.com/test/webhooks/create?endpoint_location=local
whsec_34d50c687371f7d7dba4023a90fe5a8d2997d2587bce1d8b8759a1765d472fde
https://stripe.com/docs/webhooks
https://labs.fullstak.pl/courses/take/fullstack-react-w-next-js/lessons/23302817-obsluga-webhooks-w-stripe

*/
