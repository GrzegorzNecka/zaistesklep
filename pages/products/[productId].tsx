import { ProductDetails } from "components/Product";
import { InferGetStaticPropsType } from "next";
import Link from "next/link";

// export type InferGetStaticPaths<T> = T extends () => Promise<{
//     paths: Array<{ params: infer R }>;
// }>
//     ? { params?: R }
//     : never;

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
            <Link href="/products">
                <a>wróć na stronę produktów</a>
            </Link>
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
        </div>
    );
};

export default ProductIdPage;

//async (): GetStaticPathsResult
export const getStaticPaths = async () => {
    const res = await fetch(`http://fakestoreapi.com/products/`);
    const data: StoreApiResponse[] = await res.json();

    return {
        paths: data.map((product) => {
            return {
                params: {
                    productId: `${product.id}`,
                },
            };
        }),
        fallback: false,
    };
};
// InferGetStaticPaths<typeof getStaticPaths>
//async ({ params }: GetStaticPropsContext<{ productId: string }>)
export const getStaticProps = async ({ params }: InferGetStaticPaths<typeof getStaticPaths>) => {
    if (!params?.productId) {
        return { props: {}, notFound: true };
    }

    const res = await fetch(`http://fakestoreapi.com/products/${params?.productId}`);
    const product: StoreApiResponse | null = await res.json();

    return {
        props: {
            product,
        },
    };
};
