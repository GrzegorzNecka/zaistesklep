import { useGetReviewsForProductSlugQuery } from "generated/graphql";

import ProductReviewListItem from "./ProductReviewListItem";
// hooków nie możemy używać w get static props

interface ProductRreviewListProps {
    productSlug: string;
}

const ProductRreviewList = ({ productSlug }: ProductRreviewListProps) => {
    const { data, loading, error } = useGetReviewsForProductSlugQuery({
        variables: {
            slug: productSlug,
        },
    });

    if (!data?.product) {
        return null;
    }

    return (
        <ul>
            {data.product.reviews.map((review) => {
                return <ProductReviewListItem key={review.id} review={review} />;
            })}
        </ul>
    );
};

export default ProductRreviewList;
