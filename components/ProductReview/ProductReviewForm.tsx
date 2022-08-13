import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import FormInput from "components/CheckoutForm/FormInput";
import {
    GetReviewsForProductSlugDocument,
    GetReviewsForProductSlugQuery,
    useCreateProductReviewMutation,
} from "generated/graphql";
import { concatAST } from "graphql";
import { RaitingFormInput } from "components/CheckoutForm/RaitingFormInput";

interface ProductReviewFormProps {
    productSlug: string;
}

const ProductReviewForm = ({ productSlug }: ProductReviewFormProps) => {
    // -----------

    const formSchema = yup
        .object({
            content: yup.string().required(),
            headline: yup.string().required(),
            name: yup.string().required(),
            email: yup.string().email().required(),
            rating: yup.number().required().min(1, "to pole jest wymagane").max(5),
        })
        .required();

    type formReviewData = yup.InferType<typeof formSchema>;

    const { register, handleSubmit, formState, setValue } = useForm<formReviewData>({
        resolver: yupResolver(formSchema),
    });

    // -----------

    const [createReview, { data, loading, error, client }] = useCreateProductReviewMutation({
        // --3 dane z  optimisticResponse trafiuają do funkcji update->result
        update(cashe, result) {
            result.errors;

            // --3.1 ręcznie bierzemy z cashe query na podstawie  query i zmiennych
            const originalReviewsQuery = cashe.readQuery<GetReviewsForProductSlugQuery>({
                query: GetReviewsForProductSlugDocument,
                variables: { slug: productSlug },
            });

            if (!originalReviewsQuery?.product?.reviews || !result.data?.review) {
                // ...
                return;
            }

            // --3.2 modyfikujemu query o dane zaktualizowane na optimisticResponse
            const newReviewsQuery = {
                ...originalReviewsQuery,
                product: {
                    ...originalReviewsQuery.product,
                    reviews: [...originalReviewsQuery.product?.reviews, result.data.review],
                },
            };

            cashe.writeQuery({
                query: GetReviewsForProductSlugDocument,
                variables: { slug: productSlug },
                data: newReviewsQuery,
            });
        },
    });

    // -----------

    const onSubmit = handleSubmit((data) => {
        console.log("🚀 ~ onSubmit ~ data", data);

        //--1.  wywaołujemy mutację graphQl  "CreateProductReview/createReview" z pewnymi danymi
        createReview({
            variables: {
                review: {
                    ...data, // --1.1 dane te sąwysłane do serwera
                    product: {
                        connect: {
                            slug: productSlug, //--1.2 ustawamy zmienną produktu
                        },
                    },
                },
            },
            // --2.  równocześnie, dopóki nie mamy danych z serwera, chcemy zaktualizować widok danymi, które  przekazujemy w  optimisticResponse.review
            optimisticResponse: {
                __typename: "Mutation",
                review: {
                    __typename: "Review",
                    id: (-Math.random()).toString(32), //--2.1 tymczasowe id
                    ...data,
                },
            },
        });
    });

    // ----------- REFETCH

    // const [createReview, { data, loading, error, client }] = useCreateProductReviewMutation({
    //     refetchQueries: [{ query: GetReviewsForProductSlugDocument, variables: { slug: productSlug } }],
    // });

    // const onSubmit = handleSubmit((data) => {
    //     createReview({

    //         variables: {
    //             review: {
    //                 ...data,
    //                 product: {
    //                     connect: {
    //                         slug: productSlug,
    //                     },
    //                 },
    //             },
    //         },
    //     });
    // });

    //------------

    return (
        <div className="flex flex-col md:w-full">
            <h2 className="mb-4 font-bold md:text-xl text-heading ">dodaj komentarz</h2>

            <form onSubmit={onSubmit} className="justify-center w-full mx-auto">
                <div className="mt-4">
                    <div className="w-full">
                        <FormInput type="text" placeholder="headline" name="headline" useForm={{ register, formState }}>
                            nagłówek
                        </FormInput>
                        <FormInput type="text" placeholder="imię" name="name" useForm={{ register, formState }}>
                            imię
                        </FormInput>
                        <FormInput
                            type="text"
                            placeholder="komezntarz"
                            name="content"
                            useForm={{ register, formState }}
                        >
                            treść komentarza
                        </FormInput>
                        <FormInput type="email" placeholder=" email" name="email" useForm={{ register, formState }}>
                            email
                        </FormInput>

                        <RaitingFormInput useForm={{ register, formState, setValue }} />
                    </div>
                </div>

                <button className=" my-12 w-full btn-custom-primary">dodaj komentarz</button>

                {/* {!isSuccess ? (
                    <div className="mt-4">
                        <button disabled={isLoading} className="w-full btn-custom-primary">
                            dodaj komentarz
                        </button>
                    </div>
                ) : (
                    <span>komentarz dodany pomyślnie</span>
                )} */}
            </form>
        </div>
    );
};

export default ProductReviewForm;
