import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import FormInput from "./CheckoutForm/FormInput";

const Newsletter = () => {
    yup.setLocale({
        mixed: {
            required: "to pole jest wymagane",
            oneOf: "to pole wymaga wartości: ${values}",
        },
        string: {
            email: "email jest wymagany w odpowiednim formacie ",
            min: "minimalna liczna znaków ${min}",
            length: "to pole wymaga ${length} znaków",
        },
    });

    const checkoutNewsletterSchema = yup
        .object({
            firstName: yup.string().required().min(3).trim(),
            lastName: yup.string().required().min(3).trim(),
            emailAdress: yup.string().required().email().trim(),
        })
        .required();

    type CheckoutNewsletterSchema = yup.InferType<typeof checkoutNewsletterSchema>;

    const { register, setValue, handleSubmit, formState } = useForm<CheckoutNewsletterSchema>({
        resolver: yupResolver(checkoutNewsletterSchema),
    });

    const onSubmit = handleSubmit((data) => console.log(data));

    return (
        <div className="flex flex-col md:w-full">
            <h2 className="mb-4 font-bold md:text-xl text-heading ">subscribe us</h2>
            <form onSubmit={onSubmit} className="justify-center w-full mx-auto">
                <div className="space-x-0 lg:flex lg:space-x-4">
                    <div className="w-full lg:w-1/2">
                        <FormInput
                            type="text"
                            name="firstName"
                            placeholder="First Name "
                            useForm={{ register, formState }}
                        >
                            First Name
                        </FormInput>
                    </div>
                    <div className="w-full lg:w-1/2 ">
                        <FormInput
                            type="text"
                            placeholder="Last Name"
                            name="lastName"
                            useForm={{ register, formState }}
                        >
                            Last Name
                        </FormInput>
                    </div>
                </div>
                <div className="mt-4">
                    <div className="w-full">
                        <FormInput
                            type="email"
                            placeholder="Email"
                            name="emailAdress"
                            useForm={{ register, formState }}
                        >
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

export default Newsletter;
