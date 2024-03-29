import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: "Logowanie hasłem",
            // The credentials is used to generate a suitable form on the sign in page.
            // You can specify whatever fields you are expecting to be submitted.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                username: { label: "Email", type: "email", placeholder: "email@example.com" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials, req) {
                //można odpytaćbaę danych
                credentials?.username;
                credentials?.password;
                //----------------

                console.log("🚀 ~ file: [...nextauth].ts ~ line 19 ~ authorize ~ credentials", credentials);
                // Add logic here to look up the user from the credentials supplied
                // zapytanie do bazy danych
                // zapytanie do GraphCMS
                // zapytanie do API

                const user = { id: 1, name: "J Smith", email: "jsmith@example.com" };

                if (credentials?.username === user.email) {
                    // Any object returned will be saved in `user` property of the JWT
                    return user;
                } else {
                    // If you return null then an error will be displayed advising the user to check their details.
                    return null;

                    // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
                }
            },
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
});
