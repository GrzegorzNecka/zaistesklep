import { Main } from "components/Main";
import { ProductDetails } from "components/Product";
import { InferGetStaticPropsType } from "next";
import { serialize } from "next-mdx-remote/serialize";
import { InferGetStaticPathsType } from "utils/types";
import Link from "next/link";

export interface StoreApiResponse {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
    longDescription: string;
}

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
                            rating: product.rating.rate,
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
    const paths = [];

    for (let id = 1; id < 2; id++) {
        paths.push({
            params: {
                product_id: `${id}`,
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
    if (!params?.product_id) {
        return { props: {}, notFound: true };
    }

    const res = await fetch(`https://naszsklep-api.vercel.app/api/products/${params?.product_id}`);

    const product: StoreApiResponse | null = await res.json();

    if (!product) {
        return {
            props: {},
            notFound: true,
        };
    }

    const markdown: string = product.longDescription;

    return {
        props: {
            product: { ...product, longDescription: await serialize(markdown) },
        },
        revalidate: 10,
    };
};
