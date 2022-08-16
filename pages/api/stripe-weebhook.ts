import { NextApiHandler } from "next/types";

const stripeWebhook: NextApiHandler = (req, res) => {
    //@todo verify signing secret

    console.log(req.body);

    res.status(204).end();
};

export default stripeWebhook;
