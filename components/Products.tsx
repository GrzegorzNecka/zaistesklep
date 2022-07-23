/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import { Rating } from "./Raiting";
import { NextSeo } from "next-seo";
import Markdown from "./Markdown";
import { MarkdownResult } from "utils/types";
import { useCartState } from "./Cart/CartContext";
import { ProductListItemProps } from "./types";

export const ProductListItem = ({ data }: ProductListItemProps) => {
    const cartState = useCartState();

    return (
        <div className="p-8">
            <div className="w-full bg-white aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75  lg:aspect-none">
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
                        <Link href={`/product/${data.id}`}>
                            <a className="hover:underline">
                                <span aria-hidden="true" className="">
                                    {data.title}
                                </span>
                            </a>
                        </Link>
                    </h3>
                </div>
                <p className="text-sm font-medium text-gray-900">20zł</p>
            </div>
            <div className="pt-4">{/* <Rating rating={data.rating}></Rating> */}</div>
            <div className="pt-4">
                <button
                    className=" w-full mb-8 bg-transparent hover:bg-black text-blackfont-semibold hover:text-white py-2 px-4 border-2 border-black hover:border-transparent rounded"
                    onClick={() =>
                        cartState.addItemToCart({
                            id: data.id,
                            price: 12.37,
                            title: data.title,
                            count: 1,
                        })
                    }
                >
                    dodaj do koszyka
                </button>
            </div>
        </div>
    );
};
