import Image from "next/image";
import { Rating } from "./Raiting";

interface ProductProps {
    data: {
        description: string;
        thumbnailUrl: string;
        thumbnailAlt: string;
        rating: number;
    };
}

export const Product = ({ data: { thumbnailAlt, thumbnailUrl, rating, description } }: ProductProps) => {
    return (
        <>
            <Image layout="responsive" height={300} width={200} src={thumbnailUrl} alt={thumbnailAlt} />
            <Rating rating={rating}></Rating>
            <p>{description}</p>
        </>
    );
};
