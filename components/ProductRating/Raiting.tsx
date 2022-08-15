import { StarIcon } from "@heroicons/react/solid";

interface RaitingProps {
    rating?: number;
}

export const Rating = ({ rating }: RaitingProps) => {
    if (typeof rating === "undefined") {
        return <></>;
    }

    if (typeof rating === "number" && rating > 5) {
        return <></>;
    }

    const stars = [1, 2, 3, 4, 5];

    return (
        <div className="flex items-center">
            {stars.map((star) => (
                <div key={star}>
                    <StarIcon
                        className={rating >= star ? `text-yellow-400 w-5 h-5` : `text-gray-400 w-5 h-5`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    />
                </div>
            ))}
        </div>
    );
};
