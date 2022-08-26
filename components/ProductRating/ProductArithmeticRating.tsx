import { useGetReviewsForProductSlugQuery } from "generated/graphql";
import { Rating } from "./Raiting";
import calculateArithmeticRating from "./utils/calculateArithmeticRating";

const ProductArithmeticRating = ({ productSlug }: { productSlug: string }) => {
    const { data } = useGetReviewsForProductSlugQuery({
        variables: {
            slug: productSlug,
        },
    });

    const arithmetic = calculateArithmeticRating(data);

    if (!arithmetic) {
        return <div>brak ocen</div>;
    }

    return (
        <div>
            <Rating rating={arithmetic} />
        </div>
    );
};

export default ProductArithmeticRating;
