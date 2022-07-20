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

    if (loading) return <p>Loading...</p>;
    if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;

    return (
        <Main>
            <pre>{JSON.stringify(data, null, 2)}</pre>

            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 pb-5">sklaep - strona główna</h2>
            <article>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur beatae explicabo eum. Omnis
                quibusdam dolorem quis eos itaque corrupti repudiandae. Voluptate eum, pariatur corporis nobis nisi
                aliquid at maxime id?
            </article>
        </Main>
    );
};

export default Home;
