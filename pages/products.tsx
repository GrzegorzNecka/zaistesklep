import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { Main } from "components/Main";
import { ProductListItem } from "components/Product";
import { InferGetStaticPropsType } from "next";

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

export const getStaticProps = async () => {
    const res = await fetch(`http://fakestoreapi.com/products/`);
    const data: StoreApiResponse[] = await res.json();

    return {
        props: {
            data,
        },
    };
};

const productsPage = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <div>
            <Header />

            <Main>
                <div className=" p-16">
                    <ul className="bg-white w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 ">
                        {data.map((product) => (
                            <li key={product.id} className="shadow border">
                                <ProductListItem
                                    data={{
                                        title: product.title,
                                        // description: product.description,
                                        thumbnailUrl: product.image,
                                        thumbnailAlt: product.title,
                                        // rating: product.rating.rate,
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

export default productsPage;
