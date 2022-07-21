import { Main } from "components/Main";
import { ProductDetails } from "components/Product";
import { InferGetStaticPropsType } from "next";
import { serialize } from "next-mdx-remote/serialize";
import { InferGetStaticPathsType } from "utils/types";
import Link from "next/link";
import { apolloClient } from "graphql/apolloClient";
import { gql } from "@apollo/client";

// export interface StoreApiResponse {
//     id: number;
//     title: string;
//     price: number;
//     description: string;
//     category: string;
//     image: string;
//     rating: {
//         rate: number;
//         count: number;
//     };
//     longDescription: string;
// }

interface GetProductsSlugResponse {
    products: Product[];
}

interface Product {
    slug: string;
}

// interface GetProductsListResponse {
//     products: Product[];
// }

//  interface Product {
//     slug: string;
//     name: string;
//     price: number;
//     images: Image[];
// }

// interface Image {
//     url: string;
//     width: number;
//     height: number;
//     id: string;
// }

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
                <li key={product.id} className={`className="group relative" ${product.id}`}>
                    <ProductDetails
                        data={{
                            id: product.id,
                            title: product.title,
                            description: product.description,
                            thumbnailUrl: product.image,
                            thumbnailAlt: product.title,
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

    const { data } = await apolloClient.query<GetProductsSlugResponse>({
        query: gql`
            query GetProductsSlugs {
                products {
                    slug
                }
            }
        `,
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

    const { data } = await apolloClient.query({
        variables: {
            slug: params.product_id,
        },
        query: gql`
            query GetProductDetailsBySlug($slug: String) {
                product(where: { slug: $slug }) {
                    slug
                    name
                    price
                    description
                    images {
                        url
                    }
                }
            }
        `,
    });

    // 02:28 -https://szkola.zaisteprogramuj.pl/courses/1668919/lectures/39033222
    // na graphiQl cośmi nie łapie tego zapytania

    // const res = await fetch(`https://naszsklep-api.vercel.app/api/products/${params?.product_id}`);

    // const product: StoreApiResponse | null = await res.json();

    if (!data) {
        return {
            props: {},
            notFound: true,
        };
    }

    const markdown: string = data.longDescription;

    return {
        props: {
            product: { ...data, longDescription: await serialize(markdown) },
        },
        revalidate: 10,
    };
};
