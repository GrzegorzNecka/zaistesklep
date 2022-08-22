import { useMutation } from "react-query";

export const useAddToNewsletterMutation = () =>
    useMutation("add-to-newsletter", async ({ email, name }: { email: string; name: string }) => {
        await fetch("http://localhost:3000/api/mailerLite", {
            method: "POST",
            headers: { "Cintent-Type": "application/json" },
            body: JSON.stringify({ email, name }),
        });
    });
