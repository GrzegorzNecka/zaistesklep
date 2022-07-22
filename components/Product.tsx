/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import { Rating } from "./Raiting";
import { NextSeo } from "next-seo";
import Markdown from "./Markdown";
import { MarkdownResult } from "utils/types";
import { useCartState } from "./Cart/CartContext";
import { ProductDetails, ProductDetailsProps } from "./types";

const Test = ({ thumbnailAlt, thumbnailUrl, description, title, id }: ProductDetails) => {
    return (
        <>
            <div>{thumbnailAlt}</div>
            <div>{thumbnailUrl}</div>
            <div>{description}</div>
            <div>{title}</div>

            <div>{id}</div>
        </>
    );
};

export const ProductDetails = ({
    data: { thumbnailAlt, thumbnailUrl, description, title, longDescription, id },
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

            <Test seo={{ thumbnailAlt, thumbnailUrl, description, title, longDescription, id }} />

            <div className="font-mono bg-slate-600">
                <div className="">
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
                    <h2 className="  ">{title}</h2>
                    <article className="">
                        <Markdown>{longDescription}</Markdown>
                    </article>
                </div>
            </div>
        </>
    );
};
