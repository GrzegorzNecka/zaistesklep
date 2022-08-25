import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export const apolloClient = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_HYGRAPH_CONTENT_API,
    // uri: "https://api-eu-central-1.hygraph.com/v2/cl5s794280vvm01tbegxz5w9c/master",
    cache: new InMemoryCache(),
});

export const authorizedApolloClient = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_HYGRAPH_CONTENT_API,
    cache: new InMemoryCache(),
    headers: {
        Authorization: `Bearer ${process.env.HYGRAPH_TOKEN_AUTH}`,
    },
});
