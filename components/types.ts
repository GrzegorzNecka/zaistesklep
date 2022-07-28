import { MarkdownResult } from "types";

export interface ProductDetails {
    id: string;
    title: string;
    description: string;
    thumbnailUrl: string;
    thumbnailAlt: string;
    slug: string;
    // rating: number;
    longDescription: MarkdownResult;
}

export type ProductListItem = Pick<ProductDetails, "id" | "slug" | "title" | "thumbnailUrl" | "thumbnailAlt">;

export interface ProductListItemProps {
    data: ProductListItem;
}

export interface ProductDetailsProps {
    data: ProductDetails;
}
