import { Main } from "components/Main";
import { ProductDetails } from "components/Product";
import { InferGetStaticPropsType } from "next";

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
            <div className="relative p-16">
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
            </div>
        </Main>
    );
};

export default ProductIdPage;

// -----------------  getStaticPaths  ----------------------

export const getStaticPaths = async () => {
    const countOfPages = 2;
    const data: number[] = await [...Array(countOfPages).keys()].map((p) => p + 1);

    return {
        paths: data.map((product) => {
            return {
                params: {
                    product_id: `${product}`,
                },
            };
        }),
        fallback: "blocking",
    };
};

// -----------------  getStaticProps  ----------------------

export const getStaticProps = async ({ params }: InferGetStaticPaths<typeof getStaticPaths>) => {
    if (!params?.product_id) {
        return { props: {}, notFound: true };
    }

    const res = await fetch(`https://naszsklep-api.vercel.app/api/products/${params?.product_id}`);
    const product: StoreApiResponse | null = await res.json();

    return {
        props: {
            product,
        },
        revalidate: 10,
    };
};
