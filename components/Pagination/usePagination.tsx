import { useMemo } from "react";

const range = (start: number, end: number) => {
    let length = end - start + 1;

    return Array.from({ length }, (_, idx) => idx + start);
};

export const usePagination = ({ totalCount, pageSize, siblingCount = 1, currentPage }) => {
    const paginationRange = useMemo(() => {
        const totalPageCount = Math.ceil(totalCount / pageSize); // 4206 / 25 = 168 stron
        const totalPageNumbers = siblingCount + 5; //6

        /*
        Case 1:
        If the number of pages is less than the page numbers we want to show in our
        paginationComponent, we return the range [1..totalPageCount]
        */

        // if 6 >= 168

        if (totalPageNumbers >= totalPageCount) {
            return range(1, totalPageCount);
        }

        /*
    	Calculate left and right sibling index
        and make sure they are within range 1 and totalPageCount
        */

        // większe z 3 - 1 lub 1
        const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
        // mniejsze z 3 + 1 lub 168
        const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPageCount);

        /*
      We do not show dots just when there is just one page number to be inserted between the extremes of 
      sibling and the page limits i.e 1 and totalPageCount. Hence we are using leftSiblingIndex > 2 and rightSiblingIndex < totalPageCount - 2
      */

        // dla 1 strony 1 > 2 = false
        const shouldShowLeftDots = leftSiblingIndex > 2;
        // dla 1 strony 1 < 168-2 = true
        const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

        const firstPageIndex = 1;
        const lastPageIndex = totalPageCount;

        /*
    	Case 2: No left dots to show, but rights dots to be shown
    */

        if (!shouldShowLeftDots && shouldShowRightDots) {
            let leftItemCount = 3 + 2 * siblingCount; //5
            let leftRange = range(1, leftItemCount);

            return [...leftRange, "...", totalPageCount];
        }

        /*
    	Case 3: No right dots to show, but left dots to be shown
    */

        if (shouldShowLeftDots && !shouldShowRightDots) {
            let rightItemCount = 3 + 2 * siblingCount;
            let rightRange = range(totalPageCount - rightItemCount + 1, totalPageCount);
            return [firstPageIndex, "...", ...rightRange];
        }

        /*
    	Case 4: Both left and right dots to be shown
      */

        if (shouldShowLeftDots && shouldShowRightDots) {
            let middleRange = range(leftSiblingIndex, rightSiblingIndex);
            return [firstPageIndex, "...", ...middleRange, "...", lastPageIndex];
        }
    }, [totalCount, pageSize, siblingCount, currentPage]);

    return paginationRange;
};
