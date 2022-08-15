import React from "react";
import ProductRreviewList from "./ProductRreviewList";
import ProductReviewForm from "./ProductReviewForm";

interface ProductReviewContainerProps {
    productSlug: string;
}

const ProductReviewContainer = ({ productSlug }: ProductReviewContainerProps) => {
    return (
        <div>
            <ProductReviewForm productSlug={productSlug} />
            <ProductRreviewList productSlug={productSlug} />
        </div>
    );
};

export default ProductReviewContainer;
