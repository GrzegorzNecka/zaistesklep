// import Head from "next/head";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";
import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { Product } from "components/Product";
import { Main } from "components/Main";

const DATA = {
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates neque quos sint placeat iure
    inventore earum quibusdam ullam repudiandae quidem esse velit sapiente est, repellendus optio odit
    dolorum laborum. Fugit?`,
    thumbnailUrl: "https://picsum.photos/id/237/200/300",
    thumbnailAlt: "pieseł",
    rating: 5,
};

const Home = () => {
    return (
        <div className=" flex flex-col min-h-screen ">
            <Header />
            <Main>
                <Product data={DATA} />
            </Main>
            <Footer />
        </div>
    );
};

export default Home;
