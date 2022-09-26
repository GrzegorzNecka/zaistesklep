import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
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

export const authOptions: NextAuthOptions = {
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
                    fetchPolicy: "no-cache",
                });

                const cartId = cart.data?.account?.cart?.id;

                if (cartId) {
                    session.user.cartId = cartId;
                }
            }

            session.user.id = token.sub!;

            return session;
        },
    },
    secret: process.env.NEXT_AUTH_SECRET,
};

export default NextAuth(authOptions);
