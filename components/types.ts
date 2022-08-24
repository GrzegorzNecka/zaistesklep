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

export type ProductListItem = Pick<
    ProductDetails,
    "id" | "slug" | "price" | "priceWithCurrency" | "title" | "thumbnailUrl" | "thumbnailAlt"
>;

export interface ProductListItemProps {
    data: ProductListItem;
}
