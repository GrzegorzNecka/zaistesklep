import type { NextApiHandler } from "next";

type Todo = {
    id: string;
    name: string;
};

const items: Todo[] = [{ id: "1", name: "John Doe" }];

const queryTestHandler: NextApiHandler = async (req, res) => {
    if (req.method === "POST") {
        const { name }: { name: string } = JSON.parse(req.body);

        // sometimes it will fail, this will cause a regression on the UI

        if (Math.random() > 0.7) {
            res.status(500);
            res.json({ message: "Could not add item!" });
            return;
        }

        const newTodo: Todo = { id: Math.random().toString(), name: name.toUpperCase() };
        items.push(newTodo);
        res.json(newTodo);
        return;
    }

    if (req.method === "GET") {
        res.json({
            ts: Date.now(),
            items,
        });
        return;
    }
    res.status(400).json({});
    return;
};

export default queryTestHandler;
