import { ApolloClient, InMemoryCache } from "@apollo/client";

// export const apolloClient = new ApolloClient({
//     uri: process.env.NEXT_PUBLIC_HYGRAPH_CONTENT_API,
//     cache: new InMemoryCache(),
// });

export const apolloClient = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_HYGRAPH_CONTENT_API,
    cache: new InMemoryCache(),
    // defaultOptions: {
    //     watchQuery: {
    //         nextFetchPolicy(currentFetchPolicy) {
    //             if (currentFetchPolicy === "network-only" || currentFetchPolicy === "cache-and-network") {
    //                 return "cache-first";
    //             }
    //             return currentFetchPolicy;
    //         },
    //     },
    // },
});

export const authApolloClient = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_HYGRAPH_CONTENT_API,
    cache: new InMemoryCache(),
    headers: {
        Authorization: `Bearer ${process.env.HYGRAPH_TOKEN_AUTH}`,
    },
});
