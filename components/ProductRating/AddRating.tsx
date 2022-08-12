import { StarIcon } from "@heroicons/react/solid";
import { useState } from "react";
import { FieldValues, FormState, Path, UseFormRegister, UseFormSetValue } from "react-hook-form";

interface FormInputProps<FormData extends FieldValues> {
    useForm: {
        register: UseFormRegister<FormData>;
        formState: FormState<FormData>;
        setValue: UseFormSetValue<FormData>;
    };
}

export const RaitingFormInput = <FormData extends FieldValues>({
    useForm: { register, formState, setValue },
}: FormInputProps<FormData>) => {
    const type = "number";
    const name = "rating";
    const maybeErrorMessage = formState.errors[name]?.message;
    const errorMessage = typeof maybeErrorMessage === "string" ? maybeErrorMessage : null;

    //----------------

    const stars = [1, 2, 3, 4, 5];

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    const handleRating = (star: number) => {
        setRating(star);

        setValue("rating", star);
    };

    return (
        <>
            {/* <FormInput type="number" name="rating" useForm={useForm} rating={rating}>
                rating
            </FormInput> */}

            {/* ------------------------------------ */}

            <label htmlFor="rating" className="block my-3 text-sm font-semibold text-gray-500">
                ocena
            </label>

            <input
                {...register(name)}
                type={type}
                className=" hidden  w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-black"
            />

            <div className="flex items-center">
                {stars.map((star) => (
                    <div key={star}>
                        <i
                            onClick={() => handleRating(star)}
                            onMouseEnter={() => setHover(star)}
                            onMouseLeave={() => setHover(0)}
                        >
                            <StarIcon
                                className={
                                    rating >= star
                                        ? `text-yellow-500 w-5 h-5 cursor-pointer ${hover >= star && "opacity-50"}`
                                        : `text-gray-400 w-5 h-5 cursor-pointer  ${
                                              hover >= star && "text-yellow-500 opacity-50"
                                          }`
                                    // hover >= star ? `text-yellow-500 w-5 h-5` : `text-gray-400 w-5 h-5`
                                }
                                strokeWidth={1}
                                // stroke={hover >= star ? `rgb(243 158 11)` : `transparent`}
                                viewBox="0 0 20 20"
                            />
                        </i>
                    </div>
                ))}
            </div>
            <span role="alert" className="w-full inline-bloc text-xs text-rose-600">
                {errorMessage}
            </span>
        </>
    );
};
