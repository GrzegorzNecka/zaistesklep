import { Main } from "components/Main";
import { useQuery, UseQueryResult } from "react-query";

// /https://www.youtube.com/watch?v=KSi7KVc4IDU&list=PLXa8waH0nYsBF5W_cl2LZbw5OmrcyioP3&index=1&t=80s
// 11

const fetchPerson = async () => {
    const res = await fetch("/api/zadanie_reactQuery/query");

    if (res.ok) {
        return res.json();
    }
    throw new Error("Network response not ok");
};

const QueryTestPage = () => {
    const { isLoading, isError, error, data }: UseQueryResult<{ id: string; name: string; age: number }, Error> =
        useQuery(["person"], fetchPerson, {
            staleTime: 5 * 1000,
            retry: 4,
            // select: (person) => person.name,
        });

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

    if (!data) {
        return <Main>no data</Main>;
    }

    return (
        <Main>
            <pre>
                {data.id}
                {data.name}
                {data.age}
            </pre>
        </Main>
    );
};

export default QueryTestPage;
