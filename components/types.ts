import { MarkdownResult } from "utils/types";

export interface ProductDetails {
    id: string;
    title: string;
    description: string;
    thumbnailUrl: string;
    thumbnailAlt: string;
    // rating: number;
    longDescription: MarkdownResult;
}

export type ProductListItem = Pick<ProductDetails, "id" | "title" | "thumbnailUrl" | "thumbnailAlt">;

export interface ProductListItemProps {
    data: ProductListItem;
}

export interface ProductDetailsProps {
    data: ProductDetails;
}
