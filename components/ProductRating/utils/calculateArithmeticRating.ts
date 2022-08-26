import { GetReviewsForProductSlugQuery } from "generated/graphql";

const calculateArithmeticRating = (data: GetReviewsForProductSlugQuery | undefined) => {
    if (!data?.product || !data?.product.reviews.length) {
        return null;
    }

    const filterRating = data.product.reviews.filter((review) => review.rating);

    if (!filterRating.length) {
        return null;
    }

    const selectRating = filterRating.map((review) => review.rating);

    const arithmetic = selectRating.reduce((prev, current, index, array) => {
        if (!prev || !current) {
            return;
        }
        let summary: number = prev + current;
        let i = index + 1;
        const length = array.length;

        if (i !== length) {
            return summary;
        }

        return Math.round(summary / length);
    });

    return arithmetic;
};

export default calculateArithmeticRating;
