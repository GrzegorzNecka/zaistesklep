import { ProductDetails } from "components/Product";
import { GetStaticPathsResult, GetStaticPropsContext, InferGetStaticPropsType } from "next";

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
export const getStaticPaths = async (): GetStaticPathsResult => {
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
// InferGetStaticPathsType<typeof getStaticPaths>
export const getStaticProps = async ({ params }: GetStaticPropsContext<{ productId: string }>) => {
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

const ProductIdPage = ({ product }: InferGetStaticPropsType<typeof getStaticProps>) => {
    if (!product) {
        return <div>coś poszło nie tak</div>;
    }

    return (
        <div>
            <ProductDetails
                data={{
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
