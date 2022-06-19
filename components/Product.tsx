import { Rating } from "./Raiting";

interface ProductProps {
    data: {
        title: string;
        description: string;
        thumbnailUrl: string;
        thumbnailAlt: string;
        rating: number;
    };
}

//https://tailwindui.com/components/ecommerce/components/product-overviews

export const Product = ({ data: { thumbnailAlt, thumbnailUrl, rating, description, title } }: ProductProps) => {
    return (
        <div className="p-8">
            <h2 className=" text-2xl font-bold py-8 ">{title}</h2>
            <img src={thumbnailUrl} alt={thumbnailAlt} />
            <p className=" py-8">{description}</p>
            <Rating rating={rating}></Rating>
        </div>
    );
};
