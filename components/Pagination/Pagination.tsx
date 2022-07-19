import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import { usePagination } from "./usePagination";
import { PaginationList, PaginationDots } from "components/Pagination/PaginationChunks";

interface PaginationProps {
    currentPage: number;
    totalCount: number;
}

const Pagination = ({ currentPage, totalCount }: PaginationProps) => {
    // const total = 4206;

    const siblingCount = 1; //eprezentuje minimalną liczbę przycisków wyświetlanych na po każdej stronie przycisku. domyślnie to 1
    const pageSize = 25; //reprezentacja maksymalnej liczby elementów widocznej na stronie.

    const totalPageCount = Math.floor(totalCount / pageSize); //suma wszystkich stron
    const totalPageNumbers = siblingCount + 5; // suma wszystkich elementów

    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;

    const [range, setRange] = useState<number[]>([]);

    // const paginationLogic = usePagination({ totalCount, pageSize, siblingCount, currentPage });
    const calculatRange = (start: number, end: number) => {
        const length = end - start + 1;
        //start = 4
        //end = 10
        //length = 10 - 4 + 1 = 7

        const result = Array.from({ length }, (_, idx) => idx + start);

        // => [0+4, 1+4, 2+4, 3+4, 4+4, 5+4, 6+4](7)

        return result;
    };

    useEffect(() => {
        // 1-1 , 1 = 1
        // 50-1, 1 = 50
        const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
        // 1+1 , 168 = 2
        // 56+1, 168 = 57
        const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPageCount);

        //6>= 168

        setRange(() => calculatRange(4, 10));
    }, [currentPage, totalCount]);

    return (
        <>
            <nav className=" w-full sm:border-t border-gray-200 px-4 flex items-center  pb-16 justify-center sm:px-0 mt-2">
                <div className="hidden sm:-mt-px sm:flex">
                    <ul className="flex items-end ">
                        <li>
                            {currentPage >= 2 && (
                                <Link href={`/products/list/${currentPage - 1}`}>
                                    <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
                                        prev
                                    </a>
                                </Link>
                            )}
                        </li>

                        {range.map((item) => {
                            return (
                                <li key={item}>
                                    <a
                                        className={`border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium pointer-events-none ${
                                            item === currentPage && "border-indigo-500 text-indigo-600"
                                        }`}
                                    >
                                        {item}
                                    </a>
                                </li>
                            );
                        })}

                        {/* <PaginationList list={leftResult} />
                        <PaginationDots isDots={leftDots} />
                        <PaginationList list={middleResult} />
                        <PaginationDots isDots={rightDots} />
                        <PaginationList list={rightResult} /> */}
                        <li>
                            {currentPage !== totalCount && (
                                <Link href={`/products/list/${currentPage + 1}`}>
                                    <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
                                        next
                                    </a>
                                </Link>
                            )}
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Pagination;
