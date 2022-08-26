import type { NextApiHandler } from "next";

// https://www.youtube.com/watch?v=KSi7KVc4IDU&list=PLXa8waH0nYsBF5W_cl2LZbw5OmrcyioP3&index=1&t=80s
const queryTestHandler: NextApiHandler = async (req, res) => {
    return res.status(200).json({ id: "1", name: "John Doe", age: 24 });
};

export default queryTestHandler;
