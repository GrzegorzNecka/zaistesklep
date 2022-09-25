/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import { Rating } from "./ProductRating/Raiting";
import { NextSeo } from "next-seo";
import Markdown from "./Markdown";

import { useCartState } from "./Cart/CartContext";
import { ProductListItems } from "./types";
import ProductArithmeticRating from "./ProductRating/ProductArithmeticRating";
import {
    Dispatch,
    MouseEvent,
    MutableRefObject,
    SetStateAction,
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
} from "react";

interface ProductListItemProps {
    data: ProductListItems;
    targetButton: string | null;
    setTargetButton: Dispatch<SetStateAction<string | null>>;
}

export const ProductListItem = ({ data, targetButton, setTargetButton }: ProductListItemProps) => {
    const cartState = useCartState();
    const [count, setCount] = useState<number>(1);

    const handleAddItems = (e: MouseEvent<HTMLButtonElement>) => {
        if (cartState.isLoading) {
            return;
        }

        setTargetButton(data.title);

        //!todo - walidacja  do count

        cartState.addItemToCart({
            id: data.id,
            price: data.price,
            title: data.title,
            count: count,
            imgUrl: data.thumbnailUrl,
            slug: data.slug,
        });
    };

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
            <div className="pt-4">
                <ProductArithmeticRating productSlug={data.slug} />
            </div>
            <div className="pt-4">
                {cartState.isLoading && targetButton === data.title ? (
                    <div className="flex mb-8">
                        <input
                            disabled
                            type="number"
                            className="mb-0 w-1/4 mr-4 bg-transparent py-2 px-4 border-2 border-black rounded"
                        />
                        <button disabled className={`mb-0 w-3/4 text-blackfont-semibold btn-custom-primary`}>
                            dodawanie
                        </button>
                    </div>
                ) : (
                    <div className="flex mb-8">
                        <input
                            defaultValue="1"
                            value={count}
                            onChange={(e) => setCount(Number(e.currentTarget.value))}
                            type="number"
                            className="mb-0 w-1/4 mr-4 bg-transparent py-2 px-4 border-2 border-black rounded"
                        />
                        <button
                            className={` mb-0 w-3/4 text-blackfont-semibold btn-custom-primary`}
                            onClick={handleAddItems}
                        >
                            dodaj do koszyka
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};
