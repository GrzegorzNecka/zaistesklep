import { MarkdownResult } from "types/types";

/*
 
 -----------  Product Details  -----------
 
 */

export interface ProductDetails {
    id: string;
    title: string;
    description: string;
    thumbnailUrl: string;
    thumbnailAlt: string;
    slug: string;
    price: number;
    priceWithCurrency: string;
    // rating: number;
    longDescription: MarkdownResult;
}

export interface ProductDetailsProps {
    data: ProductDetails;
}

/*
 
   ----------- Product List  -----------
 
 */

export type ProductListItems = Pick<
    ProductDetails,
    "id" | "slug" | "price" | "priceWithCurrency" | "title" | "thumbnailUrl" | "thumbnailAlt"
>;
