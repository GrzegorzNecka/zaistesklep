import { useQuery, useQueryClient, useMutation, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Main } from "components/Main";
import React from "react";

type Todo = {
    items: readonly Items[];
    ts: number;
};

type Items = {
    id: string;
    name: string;
};

/*
 * QUERY
 */

async function fetchTodos(): Promise<Todo[]> {
    const res = await fetch("/api/zadanie_reactQuery/optimistic");
    console.log("🚀 ~ file: index.tsx ~ line 19 ~ fetchTodos ~ res", res);

    if (res.ok) {
        return res.json();
    }

    throw new Error("Network response not ok");
}

function useTodos() {
    return useQuery(["todos"], fetchTodos);
}

/*
 * UPDATE
 */

/*
 * PAGE
 */

const OptimisticPage = () => {
    const queryClient = useQueryClient();
    const [name, setText] = React.useState("");
    const { isFetching, ...queryInfo } = useTodos();

    return (
        <Main>
            <p>optimistic</p>
            <ul>
                {queryInfo?.data?.items.map((item: Items) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </Main>
    );
};

export default OptimisticPage;
