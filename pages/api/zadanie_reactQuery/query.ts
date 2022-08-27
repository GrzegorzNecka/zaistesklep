import type { NextApiHandler } from "next";

const queryTestHandler: NextApiHandler = async (req, res) => {
    return res.status(200).json({ id: "1", name: "John Doe", age: 24 });
};

export default queryTestHandler;
