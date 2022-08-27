import "../styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { Layout } from "components/Layout";
import { DefaultSeo } from "next-seo";
import SEO from "next-seo.config";
import { CartStateContextProvider } from "components/Cart/CartContext";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "graphql/apolloClient";
import { SessionProvider } from "next-auth/react";
import { ReactQueryDevtools } from "react-query/devtools";

const client = new QueryClient({
    defaultOptions: {
        queries: { staleTime: 5 * 1000 },
    },
});

// const client = new QueryClient();

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
    return (
        <SessionProvider session={session}>
            <ApolloProvider client={apolloClient}>
                <QueryClientProvider client={client}>
                    <ReactQueryDevtools initialIsOpen={false} />
                    <CartStateContextProvider>
                        <Layout>
                            <DefaultSeo {...SEO} />

                            <Component {...pageProps} />
                        </Layout>
                    </CartStateContextProvider>
                </QueryClientProvider>
            </ApolloProvider>
        </SessionProvider>
    );
}

export default MyApp;
