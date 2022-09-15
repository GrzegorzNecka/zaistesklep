import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import * as bcrypt from "bcrypt";
import { authApolloClient } from "graphql/apolloClient";
import {
    GetAccountByEmailDocument,
    GetAccountByEmailQuery,
    GetAccountByEmailQueryVariables,
    GetCartIdByAccountIdDocument,
    GetCartIdByAccountIdQuery,
    GetCartIdByAccountIdQueryVariables,
    GetCartItemsByCartIdDocument,
    GetCartItemsByCartIdQuery,
    GetCartItemsByCartIdQueryVariables,
} from "generated/graphql";

export default NextAuth({
    providers: [
        CredentialsProvider({
            name: "Logowanie hasłem",
            credentials: {
                username: { label: "Email", type: "email", placeholder: "email@example.com" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials, req) {
                if (!credentials) {
                    return null;
                }

                const userByEmail = await authApolloClient.query<
                    GetAccountByEmailQuery,
                    GetAccountByEmailQueryVariables
                >({
                    query: GetAccountByEmailDocument,
                    variables: { email: credentials?.username },
                });

                if (!userByEmail.data.account?.password) {
                    return null;
                }

                const arePasswordsEqual = await bcrypt.compare(
                    credentials.password,
                    userByEmail.data.account?.password
                );

                if (!arePasswordsEqual) {
                    return null;
                }

                const session = { id: userByEmail.data.account.id, email: userByEmail.data.account.email };

                return session;
            },
        }),
    ],
    callbacks: {
        async session({ session, user, token }) {
            //add cart id from server
            if (typeof token.sub == "string") {
                const cart = await authApolloClient.query<
                    GetCartIdByAccountIdQuery,
                    GetCartIdByAccountIdQueryVariables
                >({
                    query: GetCartIdByAccountIdDocument,
                    variables: { id: token.sub },
                });
                // console.log("🚀 ~ file: [...nextauth].ts ~ line 62 ~ session ~ cart", cart);
                const cartId = cart.data?.account?.cart?.id;

                if (cartId) {
                    session.user.cartId = cartId;
                    // const cartItems = await authApolloClient.query<
                    //     GetCartItemsByCartIdQuery,
                    //     GetCartItemsByCartIdQueryVariables
                    // >({
                    //     query: GetCartItemsByCartIdDocument,
                    //     variables: { id: cartId },
                    // });

                    // console.log("🚀 ~ file: [...nextauth].ts ~ line 75 ~ session ~ cartItems", cartItems);

                    // if (cartItems) {
                    //     session.user.cartItems = cartItems.data;
                    // }
                }
            }

            //add initial cart state with cart items from server

            session.user.id = token.sub!;

            return session;
        },
    },
    secret: process.env.NEXT_AUTH_SECRET,
});
