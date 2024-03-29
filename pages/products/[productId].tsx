import { ProductListItem } from "components/ProductList";
import { InferGetStaticPropsType } from "next";
import { InferGetStaticPathsType } from "types/types";
import Pagination from "components/zadanie_Pagination/Pagination";
import { Main } from "components/Main";
import { useQuery } from "react-query";
import { countOfProducts, fetchProducts } from "services/zadanie_pagination/products";
import { gql } from "@apollo/client";
import { apolloClient } from "graphql/apolloClient";
import { GetProductsListDocument, GetProductsListQuery } from "generated/graphql";
import { changeToCurrency, moveTheComa } from "utils/currency";

const ProductListIdPage = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
    if (!data) {
        return <div>nie znaleziono strony</div>;
    }

    return (
        <Main>
            <div className="relative p-16">
                <ul className="relative  bg-white w-full mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 ">
                    {data.map((product) => (
                        <li key={product.slug} className={`className="group relative" ${product.slug}`}>
                            <ProductListItem
                                data={{
                                    id: product.id,
                                    slug: product.slug,
                                    title: product.name,
                                    thumbnailUrl: product.images[0].url,
                                    thumbnailAlt: product.images[0].id,
                                    price: product.price,
                                    priceWithCurrency: changeToCurrency(moveTheComa(product.price)),
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
                productId: `${id}`,
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
    if (!params?.productId) {
        return { props: {}, notFound: true };
    }

    // const currentPage = Number(params.id);
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
