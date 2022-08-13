import { StarIcon } from "@heroicons/react/solid";
import { useState } from "react";
import { FieldValues, FormState, Path, UseFormRegister, UseFormSetValue } from "react-hook-form";

interface FormInputProps<FormData extends FieldValues> {
    // name: Path<FormData>;
    useForm: {
        register: UseFormRegister<FormData>;
        formState: FormState<FormData>;
        setValue: UseFormSetValue<FormData>;
    };
}

type Stars = 1 | 2 | 3 | 4 | 5;

export const RaitingFormInput = <FormData extends FieldValues>({
    useForm: { register, formState, setValue },
}: FormInputProps<FormData>) => {
    //----------

    const name = "rating";
    const type = "number";
    const maybeErrorMessage = formState.errors[name]?.message;
    const errorMessage = typeof maybeErrorMessage === "string" ? maybeErrorMessage : null;

    //----------------

    const stars = [1, 2, 3, 4, 5] as const;

    const [rating, setRating] = useState<Stars | 0>(0);
    const [hover, setHover] = useState<Stars | 0>(0);

    const handleRating = (star: Stars) => {
        setRating(star);
        setValue(name, star, {
            shouldValidate: true,
            shouldDirty: true,
        });
    };

    return (
        <>
            <label htmlFor="rating" className="block my-3 text-sm font-semibold text-gray-500">
                ocena
            </label>

            <input {...register(name)} defaultValue={0} type={type} className="hidden" />

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
                                }
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
