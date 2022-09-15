import { NextApiHandler } from "next";
import * as yup from "yup";
import * as bcrypt from "bcrypt";
import { authApolloClient } from "graphql/apolloClient";
import {
    ConnectAccountWithCartDocument,
    ConnectAccountWithCartMutation,
    ConnectAccountWithCartMutationVariables,
    CreateAccountDocument,
    CreateAccountMutation,
    CreateAccountMutationVariables,
    CreateCartDocument,
    CreateCartMutation,
    CreateCartMutationVariables,
    PublishAccountDocument,
    PublishAccountMutation,
    PublishAccountMutationVariables,
    PublishCartDocument,
    PublishCartMutation,
    PublishCartMutationVariables,
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

    //! stwórz  użytkownika

    const userAccount = await authApolloClient.mutate<CreateAccountMutation, CreateAccountMutationVariables>({
        mutation: CreateAccountDocument,
        variables: { email, password: passwordHash },
    });
    console.log("🚀 ~  userAccount ", userAccount);

    const userAccountId = userAccount?.data?.createAccount?.id;

    if (!userAccountId) {
        res.status(500).json({ message: "bad response from Hygraph" });
        return;
    }

    //! opublikuj użytkownika

    const userAccountPublish = await authApolloClient.mutate<PublishAccountMutation, PublishAccountMutationVariables>({
        mutation: PublishAccountDocument,
        variables: {
            id: userAccountId,
        },
    });

    console.log("🚀 ~  userAccountPublish", userAccountPublish);

    //!  stwórz pusty koszyk, zwróć jego id

    const userCart = await authApolloClient.mutate<CreateCartMutation, CreateCartMutationVariables>({
        mutation: CreateCartDocument,
    });

    console.log("🚀 ~  userCart", userCart);

    //!  aktualizuj cart przez connect z account

    const updateCartId = await authApolloClient.mutate<
        ConnectAccountWithCartMutation,
        ConnectAccountWithCartMutationVariables
    >({
        mutation: ConnectAccountWithCartDocument,
        variables: {
            userAccountId: userAccountId,
            userCartId: userCart.data?.createCart?.id!,
        },
    });

    console.log("🚀 ~  updateCartId", updateCartId);

    //! opublikuj kartę

    const userCartPublish = await authApolloClient.mutate<PublishCartMutation, PublishCartMutationVariables>({
        mutation: PublishCartDocument,
        variables: {
            id: userCart.data?.createCart?.id!,
        },
    });

    console.log("🚀 ~  userCartPublish", userCartPublish);

    res.json({ userAccountId });
};

export default SignupHandler;
