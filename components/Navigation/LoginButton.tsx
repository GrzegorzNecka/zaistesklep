import { useSession, signIn, signOut } from "next-auth/react";

const LoginButton = () => {
    const session = useSession();

    return session.status === "authenticated" ? (
        <button type="button" onClick={() => signIn()}>
            zaloguj
        </button>
    ) : (
        <button type="button" onClick={() => signOut()}>
            wyloguj
        </button>
    );
};

export default LoginButton;
