import { DeepRequired, FieldErrorsImpl, FormState, UseFormRegister, ValidationRule } from "react-hook-form";
import { validateCreditCardDate } from "utils/validations";
import { CheckoutFormData } from "./types";

type Props = keyof CheckoutFormData;

interface FormInputProps {
    name: Props;
    type: string;
    title: string;
    register: UseFormRegister<CheckoutFormData>;
    formState: FormState<CheckoutFormData>;
    required: string | ValidationRule<boolean> | undefined;
    validate: boolean;
    maxLength?: ValidationRule<number> | undefined;
}

const addValidate = (name: Props, value: string) => {
    switch (name) {
        case `expirationDate`:
            return validateCreditCardDate(value);
        default:
            break;
    }
};

const FormInput = ({ name, type, title, register, formState, required, validate, maxLength }: FormInputProps) => {
    return (
        <>
            <input
                {...register(name, {
                    required,
                    maxLength,
                    validate: (value) => {
                        if (!validate) {
                            return;
                        }
                        return addValidate(name, value);
                    },
                })}
                type={type}
                placeholder={title}
                className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-black"
            />

            <span role="alert" className="w-full inline-block  text-rose-600">
                {formState.errors[name]?.message}
            </span>
        </>
    );
};

export default FormInput;
