/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import { Rating } from "./Raiting";
import { NextSeo } from "next-seo";
import Markdown from "./Markdown";
import { MarkdownResult } from "types";
import { useCartState } from "./Cart/CartContext";
import { ProductListItemProps } from "./types";

export const ProductListItem = ({ data }: ProductListItemProps) => {
    const cartState = useCartState();

    return (
        <div className="p-8">
            <div className="w-full bg-white md:aspect-w-1   rounded-md overflow-hidden group-hover:opacity-75   lg:aspect-none">
                <Image
                    src={data.thumbnailUrl}
                    alt={data.thumbnailAlt}
                    className="w-full h-full  lg:w-full lg:h-full mix-blend-multiply"
                    layout="responsive"
                    width={4}
                    height={3}
                    objectFit="contain"
                    objectPosition="center"
                />
            </div>

            <div className="mt-4 flex justify-between">
                <div>
                    <h3 className="text-sm text-gray-700">
                        <Link href={`/product/${data.slug}`}>
                            <a className="hover:underline">
                                <span aria-hidden="true" className="">
                                    {data.title}
                                </span>
                            </a>
                        </Link>
                    </h3>
                </div>
                <p className="text-sm font-medium text-gray-900">{data.priceWithCurrency}</p>
            </div>
            <div className="pt-4">{/* <Rating rating={data.rating}></Rating> */}</div>
            <div className="pt-4">
                <button
                    className=" w-full  text-blackfont-semibold btn-custom-primary"
                    onClick={() =>
                        cartState.addItemToCart({
                            id: data.id,
                            price: data.price,
                            title: data.title,
                            count: 1,
                            imgUrl: data.thumbnailUrl,
                        })
                    }
                >
                    dodaj do koszyka
                </button>
            </div>
        </div>
    );
};
