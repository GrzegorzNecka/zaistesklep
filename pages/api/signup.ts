import { NextApiHandler } from "next";
import * as yup from "yup";
import * as bcrypt from "bcrypt";
import { authorizedApolloClient } from "graphql/apolloClient";
import {
    CreateAccountDocument,
    CreateAccountMutation,
    CreateAccountMutationVariables,
    useCreateAccountMutation,
} from "generated/graphql";

export const signUpFormSchema = yup
    .object({
        email: yup.string().required("pole jest wymagane").email(),
        password: yup.string().required("pole jest wymagane").min(3),
        passwordConfirmation: yup.string().oneOf([yup.ref("password")], "hasła muszą być takie same"),
    })
    .required();

type SignUpFormData = yup.InferType<typeof signUpFormSchema>;

const SignupHandler: NextApiHandler = async (req, res) => {
    const { email, password, passwordConfirmation }: SignUpFormData = await JSON.parse(req.body);

    const isValid = signUpFormSchema.isValid({
        email,
        password,
        passwordConfirmation,
    });

    if (!isValid) {
        res.status(400).json({ message: "bad payload" });
    }

    const passwordHash = await bcrypt.hash(password, 12);

    const user = await authorizedApolloClient.mutate<CreateAccountMutation, CreateAccountMutationVariables>({
        mutation: CreateAccountDocument,
        variables: { email, password: passwordHash },
    });

    res.json({ userId: user.data?.createAccount?.id });
};

export default SignupHandler;
