//dodaj walidacjeYup

export const getCartSessionToken = async (): Promise<string> => {
    let token = localStorage.getItem("ZAISTE_CART_TOKEN");

    if (!token) {
        const newToken = await fetch("/api/zadanie_createCartSessionToken");

        try {
            const { status, data } = await newToken.json();
            localStorage.setItem("ZAISTE_CART_TOKEN", JSON.stringify(data));
            return data;
        } catch (error) {
            let message = "token_is_not_created";
            if (error instanceof Error) {
                message = error.message;
            }

            console.error(message);

            return "";
        }
    }

    return JSON.parse(token);
};
