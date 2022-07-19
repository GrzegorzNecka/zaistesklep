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
        console.log("🚀 ~  ~ totalCount", totalCount);
        console.log("🚀 ~  ~  pageSize", pageSize);
        console.log("🚀 ~  ~  pageSize", siblingCount);
        console.log("🚀 ~  ~  pageSize", currentPage);

        return "s";
    }, [totalCount, pageSize, siblingCount, currentPage]);

    console.log(paginationRange);
    return paginationRange;
};
