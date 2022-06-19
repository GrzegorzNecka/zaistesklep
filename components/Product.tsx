/* eslint-disable @next/next/no-img-element */
import { Rating } from "./Raiting";

interface ProductDetails {
    title: string;
    description: string;
    thumbnailUrl: string;
    thumbnailAlt: string;
    rating: number;
}

type ProductListItem = Pick<ProductDetails, "title" | "thumbnailUrl" | "thumbnailAlt">;

interface ProductListItemProps {
    data: ProductListItem;
}

interface ProductDetailsProps {
    data: ProductDetails;
}

export const ProductListItem = ({ data }: ProductListItemProps) => {
    return (
        <div className="p-8">
            <h2 className=" text-2xl font-bold py-8 ">{data.title}</h2>
            <img src={data.thumbnailUrl} alt={data.thumbnailAlt} />
        </div>
    );
};

export const ProductDetails = ({
    data: { thumbnailAlt, thumbnailUrl, rating, description, title },
}: ProductDetailsProps) => {
    return (
        <div className="p-8">
            <h2 className=" text-2xl font-bold py-8 ">{title}</h2>
            <img src={thumbnailUrl} alt={thumbnailAlt} />
            <p className=" py-8">{description}</p>
            <Rating rating={rating}></Rating>
        </div>
    );
};
