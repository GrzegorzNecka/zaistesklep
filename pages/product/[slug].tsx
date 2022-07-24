import { Main } from "components/Main";
import { ProductDetails } from "components/Product";
import { InferGetStaticPropsType } from "next";
import { serialize } from "next-mdx-remote/serialize";
import { InferGetStaticPathsType } from "utils/types";
import { apolloClient } from "graphql/apolloClient";

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
        </Main>
    );
};

export default ProductIdPage;

// -----------------  getStaticPaths  ----------------------

export const getStaticPaths = async () => {
    const { data } = await apolloClient.query<GetProductsSlugsQuery>({
        query: GetProductsSlugsDocument,
    });

    if (!data) {
        return {
            paths: [],
            fallback: "blocking",
        };
    }

    return {
        paths: data.products.map((product) => {
            return {
                params: {
                    slug: product.slug,
                },
            };
        }),
        fallback: "blocking",
    };
};

// -----------------  getStaticProps  ----------------------

export const getStaticProps = async ({ params }: InferGetStaticPathsType<typeof getStaticPaths>) => {
    if (!params?.slug) {
        return { props: {}, notFound: true };
    }

    const { data } = await apolloClient.query<GetProductDetailsBySlugQuery, GetProductDetailsBySlugQueryVariables>({
        variables: {
            slug: params.slug,
        },
        query: GetProductDetailsBySlugDocument,
    });

    if (!data || !data.product) {
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
