import * as yup from "yup";

export const signUpFormSchema = yup
    .object({
        email: yup.string().required("pole jest wymagane").email(),
        password: yup.string().required("pole jest wymagane").min(3),
        passwordConfirmation: yup.string().oneOf([yup.ref("password")], "hasła muszą być takie same"),
    })
    .required();
