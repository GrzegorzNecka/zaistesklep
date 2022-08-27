import { Main } from "components/Main";
import { useRouter } from "next/router";
import { useQuery, UseQueryResult } from "react-query";

// /https://www.youtube.com/watch?v=KSi7KVc4IDU&list=PLXa8waH0nYsBF5W_cl2LZbw5OmrcyioP3&index=1&t=80s
// 11

const QueryDynamicPage = () => {
    const {
        query: { id },
    } = useRouter();

    const { isLoading, isError, error, data }: UseQueryResult<{ id: string | string[] | undefined }, Error> = useQuery(
        ["person", id],
        async () => {
            const res = await fetch(`/api/zadanie_reactQuery/${id}`);

            if (typeof id === "string") {
                if (res.ok) {
                    return res.json();
                }

                throw new Error("Network response not ok");
            }

            throw new Error("invalid id");
        },
        {
            enabled: !!id,
            staleTime: 4 * 1000,
            // select: (person) => person.name,
        }
    );

    if (isLoading) {
        return (
            <Main>
                <pre>loading...</pre>
            </Main>
        );
    }

    if (isError) {
        return (
            <Main>
                <pre>{error.message}</pre>
            </Main>
        );
    }

    return (
        <Main>
            <pre>{data?.id}</pre>
        </Main>
    );
};

export default QueryDynamicPage;
