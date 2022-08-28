import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";

const LoginButton = () => {
    const session = useSession();
    // console.log("🚀 ~ file: LoginButton.tsx ~ line 5 ~ LoginButton ~  session", session);

    const router = useRouter();
    // console.log(session.status);

    switch (session.status) {
        case "unauthenticated":
            return (
                <>
                    <button className="" type="button" onClick={() => signIn()}>
                        zaloguj
                    </button>
                    <span className="mx-2">/</span>
                    <button type="button" onClick={() => router.push("/signup")}>
                        zarejestruj
                    </button>
                </>
            );

        case "authenticated":
            return (
                <button className="text-left" type="button" onClick={() => signOut()}>
                    <div className="text-s font-semibold">wyloguj</div>
                    <div className="text-xs "> {`${session.data.user.email}`}</div>
                </button>
            );
        default:
        case "authenticated":
            return (
                <button type="button" onClick={() => signIn()}>
                    zaloguj
                </button>
            );
    }
};

export default LoginButton;
