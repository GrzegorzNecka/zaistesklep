import { useState, useEffect } from "react";

const getCartSessionToken = async (): Promise<string> => {
    let token = window.localStorage.getItem("ZAISTE_CART_TOKEN");

    if (!token) {
        const newToken = Math.random().toString(26).substr(2);

        window.localStorage.setItem("ZAISTE_CART_TOKEN", JSON.stringify(newToken));
        return newToken;
    }

    return JSON.parse(token);
};

const useCartToken = (initialState: string | null) => {
    const [token, setToken] = useState(initialState);

    useEffect(() => {
        const getToken = async () => {
            const localStorageToken = await getCartSessionToken();
            setToken(localStorageToken);
        };

        getToken();
    }, []);

    return token;
};

export { useCartToken };
