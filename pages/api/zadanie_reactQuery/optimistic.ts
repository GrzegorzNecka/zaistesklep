import type { NextApiHandler } from "next";

const queryTestHandler: NextApiHandler = async (req, res) => {
    //-
    // const {
    //     query: { id },
    // } = req;

    // if (typeof id !== "string") {
    //     res.status(400).json({ message: "bad query" });
    //     return;
    // }
    return res.status(200).json({ id: 1, name: "John Doe", age: 24 });
};

export default queryTestHandler;
