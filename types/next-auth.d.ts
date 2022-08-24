import NextAuth from "next-auth";

declare module "next-auth" {
    interface User {
        name: string;
        email: string;
        adress: string;
    }

    interface Session {
        user: {
            address: User;
        };
    }
}
