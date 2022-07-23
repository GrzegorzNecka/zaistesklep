/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import { Rating } from "./Raiting";
import { NextSeo } from "next-seo";
import Markdown from "./Markdown";
import { MarkdownResult } from "utils/types";
import { useCartState } from "./Cart/CartContext";
import { ProductDetailsProps } from "./types";

const SeoProvider = ({ data: { thumbnailAlt, thumbnailUrl, description, title, id } }: ProductDetailsProps) => {
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
        </>
    );
};

export const ProductDetails = ({
    data: { thumbnailAlt, thumbnailUrl, description, title, longDescription, id },
}: ProductDetailsProps) => {
    return (
        <>
            <SeoProvider data={{ thumbnailAlt, thumbnailUrl, description, title, id, longDescription }} />

            <div className="font-mono ">
                <div className="grid grid-cols-2 gap">
                    <div>
                        <Image
                            src={thumbnailUrl}
                            alt={thumbnailAlt}
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
                            <h2 className="font-bold text-xl ">{title}</h2>
                            <span className=" font-medium text-xl justify-self-end">23zł</span>
                        </div>

                        <button className="mb-8 bg-transparent hover:bg-black text-blackfont-semibold hover:text-white py-2 px-4 border-2 border-black hover:border-transparent rounded">
                            Dodaj do kosza
                        </button>

                        <article className="">
                            <Markdown>{longDescription}</Markdown>
                        </article>
                    </div>
                </div>
            </div>
        </>
    );
};
