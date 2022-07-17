import { ProductListItem } from "components/Product";
import { InferGetStaticPropsType } from "next";
import { InferGetStaticPathsType } from "utils/types";
import Pagination from "components/Pagination";
import { Main } from "components/Main";
import { useQuery } from "react-query";
import { countOfProducts, fetchProducts } from "services/pages/products";

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

const ProductListIdPage = ({
    products,
    currentPage: currentPage,
    totalCount: totalCount,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
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
            <div>
                {`page number: ${currentPage}`} {`-`} {`count of products: ${totalCount} `} {`-`}{" "}
                {`pages: ${Math.floor(totalCount / 25)} `}
            </div>

            <Pagination />
        </Main>
    );
};

export default ProductListIdPage;
// -----------------  getStaticPaths  ----------------------

export const getStaticPaths = async () => {
    const paths = [];

    for (let id = 1; id < 2; id++) {
        paths.push({
            params: {
                page_id: `${id}`,
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
    if (!params?.page_id) {
        return { props: {}, notFound: true };
    }

    const currentPage = Number(params.page_id);
    let take = 25;
    let offset = 0;

    const totalCount = await countOfProducts();
    const products = await fetchProducts(take, offset);

    return {
        props: {
            products,
            currentPage: currentPage,
            totalCount: totalCount,
        },
    };
};
// https://www.freecodecamp.org/news/build-a-custom-pagination-component-in-react/
