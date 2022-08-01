import { Main } from "components/Main";
import { gql, useQuery } from "@apollo/client";
import { apolloClient } from "graphql/apolloClient";
import {
    CreateProductReviewDocument,
    CreateProductReviewMutationFn,
    CreateProductReviewMutationVariables,
    useCreateProductReviewMutation,
} from "generated/graphql";

// const { data } = await apolloClient.query<GetProductDetailsBySlugQuery, GetProductDetailsBySlugQueryVariables>({
//     variables: {
//         slug: params.slug,
//     },
//     query: GetProductDetailsBySlugDocument,
// });

const Home = () => {
    // const addReview = async () => {

    //     const data = await apolloClient.mutate<CreateProductReviewMutationFn, CreateProductReviewMutationVariables>({
    //         mutation: CreateProductReviewDocument,
    //         variables: {
    //             review: {
    //                 headline: "super product  - client site",
    //                 name: "grzegorz",
    //                 email: "grzegorz@gmail.com",
    //                 content: "bardzo dobry produkt",
    //                 rating: 5,
    //             },
    //         },
    //     });
    //     console.log(data);
    // };

    // const { loading, error, data } = useQuery(gql`
    //     query GetProductsList {
    //         products {
    //             id
    //             slug
    //             name
    //             price
    //         }
    //     }
    // `);

    // if (loading)
    //     return (
    //         <Main>
    //             <p>Loading...</p>
    //         </Main>
    //     );
    // if (error)
    //     return (
    //         <Main>
    //             <pre>{JSON.stringify(error, null, 2)}</pre>;
    //         </Main>
    //     );

    const [createReview, { data, loading, error }] = useCreateProductReviewMutation();
    const addReview = async () => {
        await createReview({
            mutation: CreateProductReviewDocument,
            variables: {
                review: {
                    headline: "super product  - client site",
                    name: "grzegorz",
                    email: "grzegorz@gmail.com",
                    content: "bardzo dobry produkt",
                    rating: 5,
                },
            },
        });
    };
    return (
        <Main>
            {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
            <div>mian</div>
            <button type="button" onClick={addReview}>
                dodaj komentarz
            </button>
            {loading && <div>ładowanie ...</div>}
            {error && <pre>{JSON.stringify(error, null, 2)}</pre>}
            {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
        </Main>
    );
};

export default Home;
