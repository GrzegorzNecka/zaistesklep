import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import FormInput from "./CheckoutForm/FormInput";

const NewsletterForm = () => {
    const checkoutNewsletterSchema = yup
        .object({
            email: yup.string().required("email jest wymagany").email().trim(),
        })
        .required();

    type CheckoutNewsletterData = yup.InferType<typeof checkoutNewsletterSchema>;

    const { register, setValue, handleSubmit, formState } = useForm<CheckoutNewsletterData>({
        resolver: yupResolver(checkoutNewsletterSchema),
    });

    const onSubmit = handleSubmit((data) => {
        const res = fetch("http://localhost:3000/api/mailerLite", {
            method: "POST",
            headers: { "Cintent-Type": "application/json" },
            body: JSON.stringify({ email: data.email }),
        });
    });

    return (
        <div className="flex flex-col md:w-full">
            <h2 className="mb-4 font-bold md:text-xl text-heading ">subscribe us</h2>
            <form onSubmit={onSubmit} className="justify-center w-full mx-auto">
                <div className="mt-4">
                    <div className="w-full">
                        <FormInput type="email" placeholder="Email" name="email" useForm={{ register, formState }}>
                            Email
                        </FormInput>
                    </div>
                </div>
                <div className="mt-4">
                    <button className="w-full btn-custom-primary">subscribe !</button>
                </div>
            </form>
        </div>
    );
};

export default NewsletterForm;
