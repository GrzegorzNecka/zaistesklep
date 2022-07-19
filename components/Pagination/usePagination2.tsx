import { useMemo } from "react";

interface UsePaginationProps {
    currentPage: number;
    totalCount: number;
    siblingCount: number;
    pageSize: number;
}

const range = (start: number, end: number) => {
    let length = end - start + 1;
    const result = Array.from({ length }, (_, idx) => idx + start);

    return result;
};

export const usePagination = ({ totalCount, pageSize, siblingCount = 1, currentPage }: UsePaginationProps) => {
    const paginationRange = useMemo(() => {
        let result = {};

        const totalPageCount = Math.floor(totalCount / pageSize);
        const totalPageNumbers = siblingCount + 5; //6

        const firstPageIndex = 1;
        const lastPageIndex = totalPageCount;

        //  6 >  4256

        if (totalPageNumbers >= totalPageCount) {
            return range(1, totalPageCount);
        }

        const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
        const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPageCount);

        const shouldShowLeftDots = leftSiblingIndex > 2;
        const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

        if (!shouldShowLeftDots && shouldShowRightDots) {
            let leftItemCount = 3 + 2 * siblingCount; //5
            let leftRange = range(1, leftItemCount);

            result = {
                leftResult: leftRange,
                leftDots: true,
                middleResult: null,
                rightDots: false,
                rightResult: totalPageCount,
            };
            return result;
        }

        if (shouldShowLeftDots && !shouldShowRightDots) {
            let rightItemCount = 3 + 2 * siblingCount;
            let rightRange = range(totalPageCount - rightItemCount + 1, totalPageCount);

            result = {
                leftResult: firstPageIndex,
                leftDots: true,
                middleResult: null,
                rightDots: false,
                rightResult: rightRange,
            };

            return result;
        }

        if (shouldShowLeftDots && shouldShowRightDots) {
            let middleRange = range(leftSiblingIndex, rightSiblingIndex);

            result = {
                leftResult: firstPageIndex,
                leftDots: true,
                middleResult: middleRange,
                rightDots: true,
                rightResult: lastPageIndex,
            };
            return result;
        }
    }, [totalCount, pageSize, siblingCount, currentPage]);

    return paginationRange;
};
