/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import { Rating } from "./Raiting";
import { NextSeo } from "next-seo";
import Markdown from "./Markdown";
import { MarkdownResult } from "utils/types";

interface ProductDetails {
    id: number;
    title: string;
    description: string;
    thumbnailUrl: string;
    thumbnailAlt: string;
    rating: number;
    longDescription: MarkdownResult;
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
            <div className="w-full p-4 bg-white aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75  lg:aspect-none">
                <Image
                    src={data.thumbnailUrl}
                    alt={data.thumbnailAlt}
                    className="w-full h-full  lg:w-full lg:h-full mix-blend-multiply"
                    layout="responsive"
                    width={16}
                    height={9}
                    objectFit="contain"
                    objectPosition="center"
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
    data: { thumbnailAlt, thumbnailUrl, rating, description, title, longDescription, id },
}: ProductDetailsProps) => {
    return (
        <>
            <NextSeo
                title={` produkt ${title}`}
                description={`${description}`}
                canonical={`https://naszsklep.vercel.app/products/${id}`}
                openGraph={{
                    url: `https://naszsklep.vercel.app/products/${id}`,
                    title,
                    description,
                    images: [
                        {
                            url: thumbnailUrl,
                            alt: thumbnailAlt,
                            type: "image/jpeg",
                        },
                    ],
                    site_name: "naszsklep",
                }}
                twitter={{
                    handle: "@handle",
                    site: "@site",
                    cardType: "summary_large_image",
                }}
            />
            <div className="p-8 w-full">
                <h2 className=" text-2xl font-bold py-8 ">{title}</h2>
                <div>
                    <Image
                        src={thumbnailUrl}
                        alt={thumbnailAlt}
                        className="w-full h-full  lg:w-full lg:h-full mix-blend-multiply"
                        layout="responsive"
                        width={16}
                        height={9}
                        objectFit="contain"
                        objectPosition="center"
                    />
                </div>
                <p className=" py-8">{description}</p>

                <article className="prose prose-xl">
                    <Markdown>{longDescription}</Markdown>
                </article>

                <Rating rating={rating}></Rating>
            </div>
        </>
    );
};
