import { Footer } from "components/Footer";
import { Header } from "components/Header";
import Head from "next/head";

interface LayoutProps {
    children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="flex flex-col mi-h-screen">
            <Head>
                <title>test sklepu</title>
                <meta name="description" content="Jakiś opis sklepu"></meta>
            </Head>
            <Header />

            <div className="flex-grow">{children}</div>

            <Footer />
        </div>
    );
};
