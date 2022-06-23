import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { Main } from "components/Main";
import Pagination from "components/Pagination";
import { ProductListItem } from "components/Product";
import { InferGetStaticPropsType } from "next";
import { useQuery, useQueryClient } from "react-query";
import { useState, useEffect } from "react";

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

const fetchProducts = async (page: number, take: number = 5) => {
    let offset = 0;

    if (page < 1) {
        return;
    }

    if (page > 1) {
        offset = (page - 1) * take;
    }

    const res = await fetch(`https://naszsklep-api.vercel.app/api/products?take=${take}&offset=${offset}`);
    const data: StoreApiResponse[] = await res.json();

    return data;
};

const ProductsPageCSR = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const queryClient = useQueryClient();
    const { data, error, isLoading, isFetching } = useQuery(
        ["product", currentPage],
        () => fetchProducts(currentPage),
        {
            keepPreviousData: true,
            staleTime: 5000,
        }
    );

    useEffect(() => {
        queryClient.prefetchQuery(["product", currentPage], () => fetchProducts(currentPage));
    }, [currentPage, queryClient]);

    if (!data || error) {
        return <div>coś poszło nie tak</div>;
    }

    return (
        <div>
            <Header />
            <Main>
                <div className="relative p-16">
                    {(isLoading || isFetching) && (
                        <div className="abolute top-1/2 left-1/2 translate-x-1/2">loading..</div>
                    )}
                    <ul className="relative  bg-white w-full mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 ">
                        {data.map((product) => (
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

            <Footer />
        </div>
    );
};

export default ProductsPageCSR;
