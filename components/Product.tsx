/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Rating } from "./Raiting";

interface ProductDetails {
    id: number;
    title: string;
    description: string;
    thumbnailUrl: string;
    thumbnailAlt: string;
    rating: number;
}

type ProductListItem = Pick<ProductDetails, "id" | "title" | "thumbnailUrl" | "thumbnailAlt">;

interface ProductListItemProps {
    data: ProductListItem;
}

interface ProductDetailsProps {
    data: ProductDetails;
}

export const ProductListItem = ({ data }: ProductListItemProps) => {
    return (
        <div className="p-8">
            <Link href={`/products/${data.id}`}>
                <a>
                    <h2 className=" text-2xl font-bold py-8 ">{data.title}</h2>
                </a>
            </Link>
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
