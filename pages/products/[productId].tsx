import { ProductListItem } from "components/ProductListItem";
import { InferGetStaticPropsType } from "next";
import { InferGetStaticPathsType } from "types/types";
import Pagination from "components/zadanie_Pagination/Pagination";
import { Main } from "components/Main";
import { useQuery } from "@tanstack/react-query";
import { countOfProducts, fetchProducts } from "services/zadanie_pagination/products";
import { gql } from "@apollo/client";
import { apolloClient } from "graphql/apolloClient";
import { GetProductsListDocument, GetProductsListQuery } from "generated/graphql";
import { changeToCurrency, moveTheComa } from "utils/currency";
import { useState } from "react";

const ProductListIdPage = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
    const [targetButton, setTargetButton] = useState<string | null>(null);

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
                                targetButton={targetButton}
                                setTargetButton={setTargetButton}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </Main>
    );
};

export default ProductListIdPage;

// -----------------

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

// -----------------

export const getStaticProps = async ({ params }: InferGetStaticPathsType<typeof getStaticPaths>) => {
    if (!params?.productId) {
        return { props: {}, notFound: true };
    }

    const { data } = await apolloClient.query<GetProductsListQuery>({
        query: GetProductsListDocument,
    });

    return {
        props: {
            data: data.products,
        },
    };
};
