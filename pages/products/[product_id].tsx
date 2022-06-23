import { ProductDetails } from "components/Product";
import { InferGetStaticPropsType } from "next";
import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { Main } from "components/Main";
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
}

const ProductIdPage = ({ product }: InferGetStaticPropsType<typeof getStaticProps>) => {
    if (!product) {
        return <div>coś poszło nie tak</div>;
    }

    return (
        <div>
            <Header />
            <Main>
                <div className="relative p-16">
                    <Link href="/products">
                        <a>wróć na stronę produktów</a>
                    </Link>
                    <ul className="relative  bg-white w-full mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 ">
                        <li key={product.id} className={`className="group relative" ${product.id}`}>
                            <ProductDetails
                                data={{
                                    id: product.id,
                                    title: product.title,
                                    description: product.description,
                                    thumbnailUrl: product.image,
                                    thumbnailAlt: product.title,
                                    rating: product.rating.rate,
                                }}
                            />
                        </li>
                    </ul>
                </div>
            </Main>
            <Footer />
        </div>
    );
};

export default ProductIdPage;

// -----------------  getStaticPaths  ----------------------

export const getStaticPaths = async () => {
    const res = await fetch(`https://naszsklep-api.vercel.app/api/products/`);
    const data: StoreApiResponse[] = await res.json();

    return {
        paths: data.map((product) => {
            return {
                params: {
                    product_id: `${product.id}`,
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
