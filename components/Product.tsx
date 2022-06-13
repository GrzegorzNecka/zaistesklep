import { Rating } from "./Raiting";

interface ProductProps {
    data: {
        description: string;
        thumbnailUrl: string;
        thumbnailAlt: string;
        rating: number;
    };
}

//https://tailwindui.com/components/ecommerce/components/product-overviews

export const Product = ({ data: { thumbnailAlt, thumbnailUrl, rating, description } }: ProductProps) => {
    return (
        <>
            <Rating rating={rating}></Rating>
            <p>{description}</p>
        </>
    );
};
