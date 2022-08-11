/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import { Rating } from "./Raiting";
import { NextSeo } from "next-seo";
import Markdown from "./Markdown";
import { MarkdownResult } from "types";
import { useCartState } from "./Cart/CartContext";
import { ProductDetailsProps } from "./types";
import ProductReviewContainer from "./ProductReview/ProductReviewContainer";

export const ProductDetails = ({ data }: ProductDetailsProps) => {
    const cartState = useCartState();
    return (
        <>
            <SeoProvider data={data} />

            <div className="font-mono ">
                <div className="grid grid-cols-2 gap">
                    <div>
                        <Image
                            src={data.thumbnailUrl}
                            alt={data.thumbnailAlt}
                            className=""
                            layout="responsive"
                            width={16}
                            height={9}
                            objectFit="contain"
                            objectPosition="center"
                        />
                    </div>

                    <div className="">
                        <div className="flex justify-between pb-8">
                            <h2 className="font-bold text-xl ">{data.title}</h2>
                            <span className=" font-medium text-xl justify-self-end">{data.priceWithCurrency}</span>
                        </div>

                        <button
                            onClick={() =>
                                cartState.addItemToCart({
                                    id: data.id,
                                    price: data.price,
                                    title: data.title,
                                    count: 1,
                                    imgUrl: data.thumbnailUrl,
                                    slug: data.slug,
                                })
                            }
                            className="btn-custom-primary"
                        >
                            Dodaj do kosza
                        </button>

                        <article className="">
                            <Markdown>{data.longDescription}</Markdown>
                        </article>

                        <ProductReviewContainer productSlug={data.slug} />
                    </div>
                </div>
            </div>
        </>
    );
};

const SeoProvider = ({ data }: ProductDetailsProps) => {
    return (
        <>
            <NextSeo
                title={` produkt ${data.title}`}
                description={`${data.description}`}
                canonical={`https://naszsklep.vercel.app/products/${data.id}`}
                openGraph={{
                    url: `https://naszsklep.vercel.app/products/${data.id}`,
                    title: data.title,
                    description: data.description,
                    images: [
                        {
                            url: data.thumbnailUrl,
                            alt: data.thumbnailAlt,
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
        </>
    );
};
