import { useQuery, useQueryClient, useMutation, QueryClient, QueryClientProvider } from "@tanstack/react-query";

type Todos = {
    items: readonly {
        id: string;
        text: string;
    }[];
    ts: number;
};

async function fetchTodos(): Promise<Todos> {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=10");

    if (res.ok) {
        return res.json();
    }

    throw new Error("Network response not ok");
}

function useTodos() {
    return useQuery(["todos"], fetchTodos);
}

const OptimisticPage = () => {
    const { isFetching, ...queryInfo } = useTodos();
    return (
        <div>
            <p>optimistic</p>
            <ul>{/* {queryInfo.data.items.map(todo => (li))} */}</ul>
        </div>
    );
};

export default OptimisticPage;
