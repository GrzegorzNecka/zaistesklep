import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { Main } from "components/Main";
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
                <div className="bg-white w-full p-16">
                    {data.map((product) => (
                        <li key={product.id}>{product.title}</li>
                    ))}
                </div>
            </Main>

            <Footer />
        </div>
    );
};

export default productsPage;
