import { FormState, UseFormRegister } from "react-hook-form";
// import { validateCreditCardDate } from "utils/validations";

import { CheckoutFormData } from "./CheckoutForm";

type Props = keyof CheckoutFormData;

interface FormInputProps {
    name: Props;
    type: string;
    placeholder?: string;
    useForm: {
        register: UseFormRegister<CheckoutFormData>;
        formState: FormState<CheckoutFormData>;
    };
    children: React.ReactNode;
}

const FormInput = ({ name, type, placeholder, useForm: { register, formState }, children }: FormInputProps) => {
    if (type === "checkbox") {
        return (
            <>
                <div className="flex ">
                    <input {...register(name)} type={type} className="mr-3 form-checkbox  border-gray-300 rounded " />
                    <label htmlFor={name} className="block mb-3 text-sm font-semibold text-gray-500">
                        {children}
                    </label>
                </div>
                <span role="alert" className="w-full inline-bloc text-xs text-rose-600">
                    {formState.errors[name]?.message}
                </span>
            </>
        );
    }

    // text
    return (
        <>
            <label htmlFor={name} className="block mb-3 text-sm font-semibold text-gray-500">
                {children}
            </label>
            <input
                {...register(name)}
                type={type}
                placeholder={placeholder}
                className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-black"
            />

            <span role="alert" className="w-full inline-bloc text-xs text-rose-600">
                {formState.errors[name]?.message}
            </span>
        </>
    );
};

export default FormInput;
