// import Head from "next/head";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";
import { Footer } from "components/Footer";
import { Header } from "components/Header";

import { products } from "data/products";

import { Main } from "components/Main";
const Home = () => {
    return (
        <div className=" flex flex-col min-h-screen ">
            <Header />
            <Main>
                <div>siema</div>
            </Main>
            <Footer />
        </div>
    );
};

export default Home;
