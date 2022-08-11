import { Rating } from "components/Raiting";
import { ReviewContentFragment } from "generated/graphql";

interface ProductReviewItemProps {
    review: ReviewContentFragment;
}

const ProductReviewListItem = ({ review }: ProductReviewItemProps) => {
    const isOptimistic = review.id.startsWith("-"); // tymczasowe id

    return (
        <>
            <li className={`border mt-4 bg-white p-2 max-w-md shadow-md ${isOptimistic ? "opacity-50" : ""}`}>
                <h3 className="font-bold">{review.headline}</h3>

                <p>content: {review.content}</p>

                {review.rating && <Rating rating={review.rating}></Rating>}

                <footer>{review.name}</footer>
            </li>
        </>
    );
};

export default ProductReviewListItem;
