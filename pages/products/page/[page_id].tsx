import { ProductListItem } from "components/Product";
import { InferGetStaticPropsType } from "next";
import { InferGetStaticPathsType } from "utils/types";
import Pagination from "components/Pagination";
import { Main } from "components/Main";
import { useQuery } from "react-query";

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

            <Pagination />
        </Main>
    );
};

export default ProductListIdPage;
// -----------------  getStaticPaths  ----------------------

export const getStaticPaths = async () => {
    const countOfPages = 2;
    const data: number[] = await [...Array(countOfPages).keys()].map((p) => p + 1);

    return {
        paths: data.map((id) => {
            return {
                params: {
                    page_id: `${id}`,
                },
            };
        }),
        fallback: "blocking",
    };
};

// -----------------  getStaticProps  ----------------------

// function getProducts() {
//     const fetchProducts = fetch(`https://naszsklep-api.vercel.app/api/products?take=${25}&offset=${0}`).then((res) =>
//         res.json()
//     );

//     const { data } = useQuery("products", fetchProducts);

//     return data;
// }

export const getStaticProps = async ({ params }: InferGetStaticPathsType<typeof getStaticPaths>) => {
    if (!params?.page_id) {
        return { props: {}, notFound: true };
    }

    // const test = await getProducts();

    const queryConfig = {
        page: Number(params.page_id),
        take: 25,
        offset: 0,
    };

    if (queryConfig.page < 1) {
        queryConfig.offset = 0;
    }

    if (queryConfig.page > 1) {
        queryConfig.offset = (queryConfig.page - 1) * queryConfig.take;
    }

    const res = await fetch(
        `https://naszsklep-api.vercel.app/api/products?take=${queryConfig.take}&offset=${queryConfig.offset}`
    );
    const products: StoreApiResponse[] | null = await res.json();

    return {
        props: {
            products,
        },
    };
};
