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
            rating: yup.number().min(1).max(5).required(),
        })
        .required();

    type formData = yup.InferType<typeof formSchema>;

    const { register, handleSubmit, formState } = useForm<formData>({
        resolver: yupResolver(formSchema),
    });

    // -----------

    const [createReview, { data, loading, error, client }] = useCreateProductReviewMutation({
        // refetchQueries: [{ query: GetReviewsForProductSlugDocument, variables: { slug: productSlug } }],
        update(cashe) {
            const originakReviewsQuery = cashe.readQuery<GetReviewsForProductSlugQuery>({
                query: GetReviewsForProductSlugDocument,
                variables: { slug: productSlug },
            });

            if (!originakReviewsQuery) {
                // ...
                return;
            }

            // originakReviewsQuery.product?.reviews.push({
            //     __typename?: "Review" | undefined;
            //     content: string;
            //     headline: string;
            //     id: string;
            //     name: string;
            //     rating?: number | null | undefined;
            // });
        },
    });

    const onSubmit = handleSubmit((data) => {
        createReview({
            // mutation: CreateProductReviewDocument,
            variables: {
                review: {
                    ...data,
                    product: {
                        connect: {
                            slug: productSlug,
                        },
                    },
                },
            },
            optimisticResponse: {
                __typename: "Mutation",

                review: {
                    __typename: "Review",
                },
            },
        });
    });

    //useCreateProductReviewMutation

    // const { mutate, isLoading, isSuccess } = useAddToNewsletterMutation();

    // const onSubmit = handleSubmit(async (data) => {
    //     mutate({ email: data.email, name: data.name });
    // });

    // -----------

    return (
        <div className="flex flex-col md:w-full">
            <h2 className="mb-4 font-bold md:text-xl text-heading ">dodaj komentarz</h2>
            <form onSubmit={onSubmit} className="justify-center w-full mx-auto">
                <div className="mt-4">
                    <div className="w-full">
                        <FormInput type="text" placeholder="name" name="name" useForm={{ register, formState }}>
                            name
                        </FormInput>
                        <FormInput type="text" placeholder="content" name="content" useForm={{ register, formState }}>
                            content
                        </FormInput>
                        <FormInput type="text" placeholder="headline" name="headline" useForm={{ register, formState }}>
                            headline
                        </FormInput>
                        <FormInput type="email" placeholder=" email" name="email" useForm={{ register, formState }}>
                            email
                        </FormInput>
                        <FormInput type="number" name="rating" useForm={{ register, formState }}>
                            rating
                        </FormInput>
                    </div>
                </div>

                <button className="w-full btn-custom-primary">dodaj komentarz</button>

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
