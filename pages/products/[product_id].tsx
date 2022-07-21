import { Main } from "components/Main";
import { ProductDetails } from "components/Product";
import { InferGetStaticPropsType } from "next";
import { serialize } from "next-mdx-remote/serialize";
import { InferGetStaticPathsType } from "utils/types";
import Link from "next/link";
import { apolloClient } from "graphql/apolloClient";
import { gql } from "@apollo/client";
import {
    GetProductDetailsBySlugDocument,
    GetProductDetailsBySlugQuery,
    GetProductDetailsBySlugQueryVariables,
    GetProductsSlugsDocument,
    GetProductsSlugsQuery,
} from "generated/graphql";

const ProductIdPage = ({ product }: InferGetStaticPropsType<typeof getStaticProps>) => {
    if (!product) {
        return <div>coś poszło nie tak</div>;
    }

    return (
        <Main>
            <Link href="/products">
                <a>wróć na stronę produktów</a>
            </Link>
            <ul className="relative  bg-white w-full mt-6    ">
                <li key={product.slug} className={`className="group relative" ${product.slug}`}>
                    <ProductDetails
                        data={{
                            id: product.slug,
                            title: product.name,
                            description: product.description,
                            thumbnailUrl: product.images[0].url,
                            thumbnailAlt: product.name,
                            // rating: product.rating.rate,
                            longDescription: product.longDescription,
                        }}
                    />
                </li>
            </ul>
        </Main>
    );
};

export default ProductIdPage;

// -----------------  getStaticPaths  ----------------------

export const getStaticPaths = async () => {
    // const paths = [];

    // for (let id = 1; id < 2; id++) {
    //     paths.push({
    //         params: {
    //             product_id: `${id}`,
    //         },
    //     });
    // }

    const { data } = await apolloClient.query<GetProductsSlugsQuery>({
        query: GetProductsSlugsDocument,
    });

    return {
        paths: data.products.map((product) => {
            return {
                params: {
                    product_id: product.slug,
                },
            };
        }),
        fallback: "blocking",
    };
};

// -----------------  getStaticProps  ----------------------

export const getStaticProps = async ({ params }: InferGetStaticPathsType<typeof getStaticPaths>) => {
    if (!params?.product_id) {
        return { props: {}, notFound: true };
    }

    const { data } = await apolloClient.query<GetProductDetailsBySlugQuery, GetProductDetailsBySlugQueryVariables>({
        variables: {
            slug: params.product_id,
        },
        query: GetProductDetailsBySlugDocument,
    });

    if (!data.product) {
        return {
            props: {},
            notFound: true,
        };
    }

    const markdown: string = data.product.description;

    return {
        props: {
            product: { ...data.product, longDescription: await serialize(markdown) },
        },
        revalidate: 10,
    };
};
