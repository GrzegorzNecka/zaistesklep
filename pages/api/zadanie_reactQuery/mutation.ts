import type { NextApiHandler } from "next";

const mutationHandler: NextApiHandler = async (req, res) => {
    const data = JSON.parse(req.body);

    return res.status(200).json(data);
};

export default mutationHandler;
