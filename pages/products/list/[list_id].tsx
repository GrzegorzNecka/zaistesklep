import { ProductListItem } from "components/Product";
import { InferGetStaticPropsType } from "next";
import { InferGetStaticPathsType } from "utils/types";
import Pagination from "components/Pagination/Pagination";
import { Main } from "components/Main";
import { useQuery } from "react-query";
import { countOfProducts, fetchProducts } from "services/pages/products";
import { gql } from "@apollo/client";
import { apolloClient } from "graphql/apolloClient";
import { GetProductsListDocument, GetProductsListQuery } from "generated/graphql";

const ProductListIdPage = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
    if (!data) {
        return <div>nie znaleziono strony</div>;
    }

    return (
        <Main>
            <div className="relative p-16">
                <ul className="relative  bg-white w-full mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 ">
                    {data.map((product) => (
                        <li key={product.slug} className={`className="group relative" ${product.slug}`}>
                            <ProductListItem
                                data={{
                                    id: product.slug,
                                    title: product.name,
                                    thumbnailUrl: product.images[0].url,
                                    thumbnailAlt: product.images[0].id,
                                    // rating: product.rating.rate,
                                }}
                            />
                        </li>
                    ))}
                </ul>
            </div>
            {/* <div>
                {`page number: ${currentPage}`} {`-`} {`count of products: ${totalCount} `} {`-`}{" "}
                {`pages: ${Math.floor(totalCount / 25)} `}
            </div> */}
            {/* <Pagination currentPage={currentPage} totalCount={totalCount} /> */}
        </Main>
    );
};

export default ProductListIdPage;
// -----------------  getStaticPaths  ----------------------

export const getStaticPaths = async () => {
    const paths = [];

    for (let id = 1; id < 2; id++) {
        paths.push({
            params: {
                list_id: `${id}`,
            },
        });
    }

    return {
        paths,
        fallback: "blocking",
    };
};

// -----------------  getStaticProps  ----------------------

export const getStaticProps = async ({ params }: InferGetStaticPathsType<typeof getStaticPaths>) => {
    if (!params?.list_id) {
        return { props: {}, notFound: true };
    }

    // const currentPage = Number(params.list_id);
    // let take = 25;
    // let offset = 0;

    /* const totalCount = await countOfProducts();*/
    // const totalCount = 4206;
    // const products = await fetchProducts(take, offset);

    const { data } = await apolloClient.query<GetProductsListQuery>({
        query: GetProductsListDocument,
    });

    return {
        props: {
            // products,
            // currentPage: currentPage,
            // totalCount: totalCount,
            data: data.products,
        },
    };
};
