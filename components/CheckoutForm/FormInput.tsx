import { DeepRequired, FieldErrorsImpl, FormState, UseFormRegister, ValidationRule } from "react-hook-form";
import { validateCreditCardDate } from "utils/validations";
import { CheckoutFormData } from "./CheckoutForm";

type Props = keyof CheckoutFormData;

interface FormInputProps {
    name: Props;
    type: string;
    title?: string;
    useForm: {
        register: UseFormRegister<CheckoutFormData>;
        formState: FormState<CheckoutFormData>;
    };

    // required: string | ValidationRule<boolean> | undefined;
    // validate: boolean;
    // maxLength?: ValidationRule<number> | undefined;
}

// const addValidate = (name: Props, value: string) => {
//     switch (name) {
//         case `expirationDate`:
//             return validateCreditCardDate(value);
//         default:
//             break;
//     }
// };

const FormInput = ({ name, type, title, useForm: { register, formState } }: FormInputProps) => {
    return (
        <>
            <input
                {...register(name, {
                    // required,
                    // maxLength,
                    // validate: (value) => {
                    //     if (!validate) {
                    //         return;
                    //     }
                    //     return addValidate(name, value);
                    // },
                })}
                type={type}
                placeholder={title}
                className={
                    type === "checkbox"
                        ? "w-5 h-5 border border-gray-300 rounded focus:outline-none focus:ring-1"
                        : `w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-black`
                }
            />

            <span role="alert" className={type === "checkbox" ? "r" : "w-full inline-bloc text-xs text-rose-600"}>
                {formState.errors[name]?.message}
            </span>
        </>
    );
};

export default FormInput;
