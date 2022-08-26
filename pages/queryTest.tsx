import { useQuery } from "react-query";

// /https://www.youtube.com/watch?v=KSi7KVc4IDU&list=PLXa8waH0nYsBF5W_cl2LZbw5OmrcyioP3&index=1&t=80s
// 11

const QueryTestPage = () => {
    const { status, error, data } = useQuery(
        ["queryKey"],
        async () => {
            const res = await fetch("api/queryTest");
            return res.json();
        }
        // {
        //     keepPreviousData: true,
        // }
    );

    if (status) {
        return <pre>{status}</pre>;
    }

    if (error) {
        return <pre>{error}</pre>;
    }

    return <div>queryTest</div>;
};

export default QueryTestPage;
