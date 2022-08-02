import { useState, useEffect } from "react";
import { getCartSessionToken } from "./services/localStorage";
// nie wiem czy zamiast tego nie lepsze by było memo
export const useCartToken = (initialState: string | null) => {
    const [token, setToken] = useState(initialState);

    useEffect(() => {
        const getToken = async () => {
            const localStorageToken = await getCartSessionToken();
            if (!localStorageToken.length) {
                return;
            }
            setToken(localStorageToken);
        };

        getToken();
    }, []);

    return token;
};
