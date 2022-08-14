// import {
//     GetReviewsForProductSlugDocument,
//     GetReviewsForProductSlugQuery,
//     useCreateProductReviewMutation,
// } from "generated/graphql";

// const optimisticUpdateProductReviewMutation = (productSlug: string) => {
//     const [createReview, { data, loading, error, client }] = useCreateProductReviewMutation({
//         // --3 dane z  optimisticResponse trafiuają do funkcji update->result
//         update(cashe, result) {
//             result.errors;

//             // --3.1 ręcznie bierzemy z cashe query na podstawie  query i zmiennych
//             const originalReviewsQuery = cashe.readQuery<GetReviewsForProductSlugQuery>({
//                 query: GetReviewsForProductSlugDocument,
//                 variables: { slug: productSlug },
//             });

//             if (!originalReviewsQuery?.product?.reviews || !result.data?.review) {
//                 // ...
//                 return;
//             }

//             // --3.2 modyfikujemu query o dane zaktualizowane na optimisticResponse
//             const newReviewsQuery = {
//                 ...originalReviewsQuery,
//                 product: {
//                     ...originalReviewsQuery.product,
//                     reviews: [...originalReviewsQuery.product?.reviews, result.data.review],
//                 },
//             };

//             cashe.writeQuery({
//                 query: GetReviewsForProductSlugDocument,
//                 variables: { slug: productSlug },
//                 data: newReviewsQuery,
//             });
//         },
//     });

//     return [createReview, { data, loading, error, client }];
// };

// export default optimisticUpdateProductReviewMutation;
