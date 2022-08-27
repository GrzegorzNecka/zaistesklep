import { Main } from "components/Main";

import React, { useState } from "react";
import { useMutation, UseMutationResult, useQuery, useQueryClient, UseQueryResult } from "react-query";

// /https://www.youtube.com/watch?v=KSi7KVc4IDU&list=PLXa8waH0nYsBF5W_cl2LZbw5OmrcyioP3&index=1&t=80s
// 11

interface Payload {
    id: string;
    name: string;
    age: number;
}

const MutationPage = () => {
    const [enabled, setEnabled] = useState(false);

    /*
------------------ QUERY
*/

    const fetchPerson = async () => {
        const res = await fetch("/api/zadanie_reactQuery/query");

        if (res.ok) {
            return res.json();
        }
        throw new Error("Network response not ok");
    };

    const { data }: UseQueryResult<{ id: string; name: string; age: number }, Error> = useQuery(["todo"], fetchPerson, {
        enabled,
    });

    /*
------------------ MUTATION
*/

    const queryClient = useQueryClient();

    const updateTodo = async (id: string, name: string, age: number) => {
        const res = await fetch(`/api/zadanie_reactQuery/mutation`, {
            method: "POST",
            body: JSON.stringify({
                id,
                name,
                age,
            }),
        });

        if (res.ok) {
            return res.json();
        }
        throw new Error("error create todo");
    };

    const mutation = useMutation(async ({ id, name, age }: Payload) => await updateTodo(id, name, age), {
        onMutate: async (newTodo) => {
            console.log(queryClient);
            // const td = await queryClient.cancelQueries("todos");
            // console.log("🚀 ~ file: mutation.tsx ~ line 59 ~ onMutate: ~  td", td);
            // const previousTodo = queryClient.getQueryData("todos");
            // console.log("🚀 ~ file: mutation.tsx ~ line 44 ~ onMutate: ~ previousTodo", previousTodo);
            return newTodo;
            // queryClient.setQueryData("todos", [...todos, { name: newTodo }]);
            // return { previousTodo, newTodo };
        },
        // If the mutation fails, use the context returned from onMutate to roll back
        onError: (err, newTodo, context) => {
            // queryClient.setQueryData("todos", context.previousTodos);
        },
        onSuccess: (data, variables, context) => {
            // queryClient.invalidateQueries("person");
        },
    });

    /*
------------------ MUTATE
*/

    const handleSubmit = async (event: React.SyntheticEvent) => {
        event.preventDefault();
        const target = event.target as typeof event.target & {
            name: { value: string };
            age: { value: number };
        };

        const id = "1";
        const name = target.name.value;
        const age = target.age.value;

        mutation.mutate({ id, name, age });
    };

    return (
        <Main>
            <div>
                {mutation.isLoading ? (
                    "Adding todo..."
                ) : (
                    <>
                        {/* {mutation.isError ? <div>An error occurred: {mutation?.error?.message}</div> : null} */}
                        {mutation.isSuccess ? <div>added {mutation.data.name}</div> : null}

                        <form onSubmit={handleSubmit}>
                            <label htmlFor="age">age</label>
                            <input type="number" id="age" name="age" />
                            <label htmlFor="name">name</label>
                            <input type="text" id="name" name="name" />
                            <input className="btn btn-custom-primary" type="submit" value="Submit" />
                        </form>

                        <button
                            type="button"
                            onClick={() => {
                                setEnabled(!enabled);
                                // queryClient.invalidateQueries("todo");
                            }}
                            className="btn btn-custom-primary"
                        >
                            Invalidate Cash
                        </button>
                    </>
                )}
            </div>
            <div>{data && data.name}</div>
        </Main>
    );
};

export default MutationPage;
