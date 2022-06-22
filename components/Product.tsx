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

type ProductListItem = Pick<ProductDetails, "id" | "title" | "thumbnailUrl" | "thumbnailAlt" | "rating">;

interface ProductListItemProps {
    data: ProductListItem;
}

interface ProductDetailsProps {
    data: ProductDetails;
}

export const ProductListItem = ({ data }: ProductListItemProps) => {
    return (
        <div className="p-8">
            <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                    src={data.thumbnailUrl}
                    alt={data.thumbnailAlt}
                    className="w-full h-full object-center object-contain lg:w-full lg:h-full mix-blend-multiply"
                />
            </div>

            <div className="mt-4 flex justify-between">
                <div>
                    <h3 className="text-sm text-gray-700">
                        <Link href={`/products/${data.id}`}>
                            <a>
                                <span aria-hidden="true" className="">
                                    {data.title}
                                </span>
                            </a>
                        </Link>
                    </h3>
                </div>
                <p className="text-sm font-medium text-gray-900">20zł</p>
            </div>
            <div className="pt-4">
                <Rating rating={data.rating}></Rating>
            </div>
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
