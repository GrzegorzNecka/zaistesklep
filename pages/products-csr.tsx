import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { Main } from "components/Main";
import { ProductDetails } from "components/Product";
import { InferGetStaticPropsType } from "next";
import { useQuery } from "react-query";

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

const getProducts = async () => {
    const res = await fetch(`http://fakestoreapi.com/products/`);
    const data: StoreApiResponse[] = await res.json();
    return data;
};

const ProductsPageCSR = () => {
    const { data, isLoading, error } = useQuery("products", getProducts);

    // result.data;
    // result.isLoading;
    // result.isError;

    if (isLoading) {
        return <div>loading..</div>;
    }

    if (!data || error) {
        return <div>coś poszło nie tak</div>;
    }

    return (
        <div>
            <Header />

            <Main>
                <div className=" p-16">
                    <ul className="bg-white w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 ">
                        {data.map((product) => (
                            <li key={product.id} className="shadow border">
                                <ProductDetails
                                    data={{
                                        title: product.title,
                                        description: product.description,
                                        thumbnailUrl: product.image,
                                        thumbnailAlt: product.title,
                                        rating: product.rating.rate,
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
