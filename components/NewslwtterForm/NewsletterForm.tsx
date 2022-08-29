import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import FormInput from "../Forms/FormInput";
import { useMutation } from "@tanstack/react-query";

type NewsletterMutation = {
    email: string;
    name: string;
};

const useAddToNewsletterMutation = () =>
    useMutation(async ({ email, name }: NewsletterMutation) => {
        await fetch("http://localhost:3000/api/mailerLite", {
            method: "POST",
            headers: { "Cintent-Type": "application/json" },
            body: JSON.stringify({ email, name }),
        });
    });

const NewsletterForm = () => {
    const formSchema = yup
        .object({
            email: yup.string().required("email jest wymagany").email().trim(),
            name: yup.string().required("name jest wymagany").min(3).trim(),
        })
        .required();

    type formData = yup.InferType<typeof formSchema>;

    const { register, handleSubmit, formState } = useForm<formData>({
        resolver: yupResolver(formSchema),
    });

    const { mutate, isLoading, isSuccess } = useAddToNewsletterMutation();
    console.log("🚀 ~ file: NewsletterForm.tsx ~  mutate", mutate);

    const onSubmit = handleSubmit(async (data) => {
        mutate({ email: data.email, name: data.name });
    });

    return (
        <div className="flex flex-col md:w-full">
            <h2 className="mb-4 font-bold md:text-xl text-heading ">subscribe us</h2>
            <form onSubmit={onSubmit} className="justify-center w-full mx-auto max-w-md ">
                <div className="mt-4">
                    <div className="w-full">
                        <FormInput
                            id="newsletter-name"
                            type="text"
                            placeholder="Name"
                            name="name"
                            useForm={{ register, formState }}
                        >
                            Name
                        </FormInput>
                        <FormInput
                            id="newsletter-email"
                            type="email"
                            placeholder="Email"
                            name="email"
                            useForm={{ register, formState }}
                        >
                            Email
                        </FormInput>
                    </div>
                </div>

                {!isSuccess ? (
                    <div className="mt-4">
                        <button
                            data-cy="newsletter-submit-btn"
                            type="submit"
                            disabled={isLoading}
                            className="w-full btn-custom-primary"
                        >
                            subscribe !
                        </button>
                    </div>
                ) : (
                    <span data-cy="newsletter-submit-confetti">subscribe was successed</span>
                )}
            </form>
        </div>
    );
};

export default NewsletterForm;
