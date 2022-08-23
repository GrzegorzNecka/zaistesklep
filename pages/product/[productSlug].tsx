import { Main } from "components/Main";
import { ProductDetails } from "components/ProductDetails";
import { InferGetStaticPropsType } from "next";
import { serialize } from "next-mdx-remote/serialize";
import { InferGetStaticPathsType } from "types";
import { apolloClient } from "graphql/apolloClient";

import {
    GetProductDetailsBySlugDocument,
    GetProductDetailsBySlugQuery,
    GetProductDetailsBySlugQueryVariables,
    GetProductsSlugsDocument,
    GetProductsSlugsQuery,
} from "generated/graphql";
import { changeToCurrency, moveTheComa } from "utils/currency";

const ProductIdPage = ({ product }: InferGetStaticPropsType<typeof getStaticProps>) => {
    if (!product) {
        return <div>coś poszło nie tak</div>;
    }

    return (
        <Main>
            <ProductDetails
                data={{
                    id: product.id,
                    title: product.name,
                    description: product.description,
                    thumbnailUrl: product.images[0].url,
                    thumbnailAlt: product.name,
                    slug: product.slug,
                    // rating: product.rating.rate,
                    longDescription: product.longDescription,
                    price: product.price,
                    priceWithCurrency: changeToCurrency(moveTheComa(product.price)),
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
                    productSlug: product.slug,
                },
            };
        }),
        fallback: "blocking",
    };
};

// -----------------  getStaticProps  ----------------------

export const getStaticProps = async ({ params }: InferGetStaticPathsType<typeof getStaticPaths>) => {
    if (!params?.productSlug) {
        return { props: {}, notFound: true };
    }

    const { data } = await apolloClient.query<GetProductDetailsBySlugQuery, GetProductDetailsBySlugQueryVariables>({
        variables: {
            slug: params.productSlug,
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
