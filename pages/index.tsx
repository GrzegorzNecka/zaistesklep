// import Head from "next/head";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";
import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { Products } from "components/Products";
import { Main } from "components/Main";
import { products } from "data/products";

const Home = () => {
    return (
        <div className=" flex flex-col min-h-screen ">
            <Header />
            <Main>
                <Products products={products} />
            </Main>
            <Footer />
        </div>
    );
};

export default Home;
