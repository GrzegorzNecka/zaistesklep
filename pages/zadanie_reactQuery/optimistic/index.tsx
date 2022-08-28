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
    const [name, setName] = React.useState("");
    const { isFetching, ...queryInfo } = useTodos();

    /*
     * MUTATION
     */

    const addTodoMutation = useMutation(
        async (newTodo) => {
            const res = await fetch("/api/zadanie_reactQuery/optimistic", {
                method: "POST",
                headers: { "Content-Type": "application/json;" },
                body: JSON.stringify({ name: newTodo }),
            });

            if (res.ok) {
                return res.json();
            }

            throw new Error("Network response not ok");
        },
        {
            // When mutate is called:
            onMutate: async (newTodo: string) => {
                setName("");

                await queryClient.cancelQueries(["todos"]);

                const previousTodos = queryClient.getQueryData<Todo>(["todos"]);

                if (previousTodos) {
                    queryClient.setQueryData<Todo>(["todos"], {
                        ...previousTodos,
                        items: [...previousTodos.items, { id: Math.random().toString(), name: newTodo }],
                    });
                }

                return { previousTodos };
            },

            onError: (err, variables, context) => {
                if (context?.previousTodos) {
                    queryClient.setQueryData<Todo>(["todos"], context.previousTodos);
                }
            },

            onSettled: () => {
                queryClient.invalidateQueries(["todos"]);
            },
        }
    );

    return (
        <Main>
            <p>optimistic</p>
            <br />
            <br />
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    addTodoMutation.mutate(name);
                }}
            >
                <input type="text" onChange={(event) => setName(event.target.value)} value={name} />
                <button disabled={addTodoMutation.isLoading}>Create</button>
            </form>
            <br />
            <br />
            {queryInfo.isSuccess && (
                <>
                    <ul>
                        {queryInfo?.data?.items.map((item: Items) => (
                            <li key={item.id}>{item.name}</li>
                        ))}
                    </ul>
                </>
            )}
        </Main>
    );
};

export default OptimisticPage;
