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
