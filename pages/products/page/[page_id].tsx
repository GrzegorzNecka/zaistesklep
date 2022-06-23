import { ProductListItem } from "components/Product";
import { InferGetStaticPropsType } from "next";
import { Footer } from "components/Footer";
import { Header } from "components/Header";
import Pagination from "components/Pagination";
import { Main } from "components/Main";

interface StoreApiResponse {
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

const ProductListIdPage = ({ products }: InferGetStaticPropsType<typeof getStaticProps>) => {
    if (!products) {
        return <div>nie znaleziono strony</div>;
    }

    return (
        <div>
            <Header />
            <Main>
                <div className="relative p-16">
                    <ul className="relative  bg-white w-full mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 ">
                        {products.map((product) => (
                            <li key={product.id} className={`className="group relative" ${product.id}`}>
                                <ProductListItem
                                    data={{
                                        title: product.title,
                                        // description: product.description,
                                        thumbnailUrl: product.image,
                                        thumbnailAlt: product.title,
                                        rating: product.rating.rate,
                                        id: product.id,
                                    }}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </Main>
            <Pagination />
            <Footer />
        </div>
    );
};

export default ProductListIdPage;
// -----------------  getStaticPaths  ----------------------

export const getStaticPaths = async () => {
    const countOfPages = 10;
    const data: number[] = await [...Array(countOfPages).keys()].map((p) => p + 1);

    return {
        paths: data.map((id) => {
            return {
                params: {
                    page_id: `${id}`,
                },
            };
        }),
        fallback: false,
    };
};

// -----------------  getStaticProps  ----------------------

export const getStaticProps = async ({ params }: InferGetStaticPaths<typeof getStaticPaths>) => {
    if (!params?.page_id) {
        return { props: {}, notFound: true };
    }

    const page = Number(params.page_id);

    const take = 25;
    let offset = 0;

    if (page < 1) {
        return;
    }

    if (page > 1) {
        offset = (page - 1) * take;
    }

    const res = await fetch(`https://naszsklep-api.vercel.app/api/products?take=${take}&offset=${offset}`);
    const products: StoreApiResponse[] | null = await res.json();

    return {
        props: {
            products,
        },
    };
};
