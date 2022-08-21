import { NextApiHandler } from "next/types";
import { StripeWebhookEvents } from "stripeEvents";

//1. klient komunikuje się ze stripe
//2. stripe rpzetwarza płątności
//3 stripe wysyła zdarzenia do naszej aplikacji (Webhook)
//4. nasza aplikacja upewnia się, że wiadomość pochodzi ze stripe
//5. aplikacja przetwarza zdarzenia wysłane przez stripe.

const stripeWebhook: NextApiHandler = (req, res) => {
    //@todo verify signing secret
    // sprawdźczy żądanie zostało wysłane przez stripea, jęsli nie to return

    const event = req.body as StripeWebhookEvents;
    console.log("🚀 ~ file: stripe-weebhook.ts ~ line 9 ~ event", event);

    switch (event.type) {
        case "checkout.session.completed":
            event.data.object.id;
            console.log("checkout.session.async_payment_succeeded status", event.type);

            // sprawdzasz jaki typ danych jest dostępny a potem jakie dane masz

            console.log("checkout.session.async_payment_succeeded status", event.data.object.status);
            //checkout.session.completed
            // @todo zaktualizuj zamówienie w GraphCms
            return;
        case "checkout.session.async_payment_failed":
            console.log("checkout.session.async_payment_failed status", event.data.object.status);
            // @todo zaktualizuj zamówienie w GraphCms
            return;
        case "checkout.session.async_payment_succeeded":
            console.log("checkout.session.async_payment_succeeded status", event.data.object.status);
            // @todo zaktualizuj zamówienie w GraphCms
            return;
    }
    res.status(204).end();
};

export default stripeWebhook;
