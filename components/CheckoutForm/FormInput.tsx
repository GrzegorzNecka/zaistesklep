import { RaitingFormInput } from "components/ProductRating/AddRating";
import { useState } from "react";
import { FieldValues, FormState, Path, UseFormRegister } from "react-hook-form";

interface FormInputProps<FormData extends FieldValues> {
    name: Path<FormData>;
    type: string;

    placeholder?: string;
    useForm: {
        register: UseFormRegister<FormData>;
        formState: FormState<FormData>;
    };
    children: React.ReactNode;
}

const FormInput = <FormData extends FieldValues>({
    name,
    type,

    placeholder,
    useForm: { register, formState },
    children,
}: FormInputProps<FormData>) => {
    const maybeErrorMessage = formState.errors[name]?.message;
    const errorMessage = typeof maybeErrorMessage === "string" ? maybeErrorMessage : null;

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
                    {errorMessage}
                </span>
            </>
        );
    }

    // if (type === "number" && name === "rating") {
    //     return (
    //         <>
    //             <label htmlFor={name} className="block my-3 text-sm font-semibold text-gray-500">
    //                 {children}
    //             </label>

    //             <input
    //                 {...register(name)}
    //                 type={type}
    //                 className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-black"
    //             />

    //             <span role="alert" className="w-full inline-bloc text-xs text-rose-600">
    //                 {errorMessage}
    //             </span>
    //         </>
    //     );
    // }

    // text
    return (
        <>
            <label htmlFor={name} className="block my-3 text-sm font-semibold text-gray-500">
                {children}
            </label>
            <input
                {...register(name)}
                type={type}
                placeholder={placeholder}
                className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-black"
            />

            <span role="alert" className="w-full inline-bloc text-xs text-rose-600">
                {errorMessage}
            </span>
        </>
    );
};

export default FormInput;
