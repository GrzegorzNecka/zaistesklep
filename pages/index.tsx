import { Main } from "components/Main";
import { gql, useQuery } from "@apollo/client";

const Home = () => {
    const { loading, error, data } = useQuery(gql`
        query GetProductsList {
            products {
                id
                slug
                name
                price
            }
        }
    `);

    if (loading)
        return (
            <Main>
                <p>Loading...</p>
            </Main>
        );
    if (error)
        return (
            <Main>
                <pre>{JSON.stringify(error, null, 2)}</pre>;
            </Main>
        );

    return (
        <Main>
            {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
            <div>mian</div>
        </Main>
    );
};

export default Home;
