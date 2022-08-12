import { Rating } from "components/ProductRating/Raiting";
import { ReviewContentFragment } from "generated/graphql";

interface ProductReviewItemProps {
    review: ReviewContentFragment;
}

const ProductReviewListItem = ({ review }: ProductReviewItemProps) => {
    const isOptimistic = review.id.startsWith("-"); // tymczasowe id

    return (
        <>
            <li className={`border mt-4 bg-white p-2   ${isOptimistic ? "opacity-50" : ""}`}>
                <h3 className="font-bold">nagłówek: {review.headline}</h3>
                <p>klient: {review.name}</p>
                <p>komentarz: {review.content}</p>
                {review.rating && <Rating rating={review.rating}></Rating>}
            </li>
        </>
    );
};

export default ProductReviewListItem;
