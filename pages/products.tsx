import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { Main } from "components/Main";
import Pagination from "components/Pagination";
import { ProductListItem } from "components/Product";
import { InferGetStaticPropsType } from "next";

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

const productsPage = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <div>
            <Header />

            <Main>
                <div className="relative p-16">
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
            <Pagination />
            <Footer />
        </div>
    );
};

export const getStaticProps = async () => {
    const res = await fetch(`https://naszsklep-api.vercel.app/api/products`);
    const data: StoreApiResponse[] = await res.json();

    return {
        props: {
            data,
        },
    };
};

export default productsPage;
