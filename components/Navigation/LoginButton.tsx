import { useSession, signIn, signOut } from "next-auth/react";

const LoginButton = () => {
    const session = useSession();

    // console.log(session.status);
    return session.status === "unauthenticated" ? (
        <button type="button" onClick={() => signIn()}>
            zaloguj
        </button>
    ) : (
        <button type="button" onClick={() => signOut()}>
            wyloguj
        </button>
    );

    // return (
    //     <button type="button" onClick={() => signIn()}>
    //         zaloguj
    //     </button>
    // );
};

export default LoginButton;
