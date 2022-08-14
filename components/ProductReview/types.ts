import { FieldValues, FormState, Path, PathValue, UseFormRegister, UseFormSetValue } from "react-hook-form";

// export interface RaitingFormInputProps<FormData extends FieldValues> {
//     name: Path<FormData>;
//     useForm: {
//         register: UseFormRegister<FormData>;
//         formState: FormState<FormData>;
//         setValue: UseFormSetValue<FormData>;
//     };
// }

interface Data {
    content: string;
    headline: string;
    name: string;
    email: string;
    rating: number;
}

export interface RaitingFormInputProps {
    useForm: {
        register: UseFormRegister<Data>;
        formState: FormState<Data>;
        setValue: UseFormSetValue<Data>;
    };
}

export type Stars = 1 | 2 | 3 | 4 | 5;
