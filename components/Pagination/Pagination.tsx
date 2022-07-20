import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface PaginationRangeProps {
    range: number[];
    currentPage: number;
}

const PaginationRange = ({ range, currentPage }: PaginationRangeProps) => {
    return (
        <>
            {range.map((item) => {
                return (
                    <li key={item}>
                        <Link href={`/products/list/${item}`}>
                            <a
                                className={`border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium  ${
                                    item === currentPage && "border-indigo-500 text-indigo-600 pointer-events-none"
                                }`}
                            >
                                {item}
                            </a>
                        </Link>
                    </li>
                );
            })}
        </>
    );
};

interface PaginationProps {
    currentPage: number;
    totalCount: number;
}

type RangeCalc = (start: number, end: number) => number[];
type RangeUseState = number[];

const Pagination = ({ currentPage, totalCount }: PaginationProps) => {
    // const total = 4206;

    const siblingCount = 1; //reprezentuje minimalną liczbę przycisków wyświetlanych na po każdej stronie przycisku. domyślnie to 1
    const pageSize = 25; //reprezentacja maksymalnej liczby elementów widocznej na stronie.

    const totalPageCount = Math.floor(totalCount / pageSize); //suma wszystkich stron
    const totalPageNumbers = siblingCount + 5; // suma wszystkich elementów

    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;

    /**
     *  pagination -> [leftRange, leftDotts, middleRange, rightDotts, rightRange]
     */

    const [leftRange, setLeftRange] = useState<RangeUseState>([]);
    const [leftDots, setLeftDots] = useState(false);
    const [middleRange, setMiddleRange] = useState<RangeUseState>([]);
    const [rightDots, setRightDots] = useState(false);
    const [rightRange, setRightRange] = useState<RangeUseState>([]);

    // const paginationLogic = usePagination({ totalCount, pageSize, siblingCount, currentPage });

    const rangeCalc: RangeCalc = (start, end) => {
        const length = end - start + 1;

        //start = 4
        //end = 10
        //length = 10 - 4 + 1 = 7

        const result = Array.from({ length }, (_, i) => i + start);
        // => [0+4, 1+4, 2+4, 3+4, 4+4, 5+4, 6+4](7)

        return result;
    };

    useEffect(() => {
        /*
        1.  suma wszystkich stron jest mniejsza niż liczba elementów, które chcemy wyświetlić na liście paginacji. 
            W takim przypadku po prostu zwracamy zakres od 1 do totalPageCount
        */

        if (totalPageNumbers >= totalPageCount) {
            //start = 1
            //end = totalPageCount
            //length = totalPageCount - start + 1
            setLeftRange(() => rangeCalc(1, totalPageCount));
        }

        // zwraca większą liczbę => aktualna strona - minimalna liczba przycisków lub 1
        // co jeśli wyjdzie 0 albo wartoć minusowa ???
        const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
        const shouldShowLeftDots = leftSiblingIndex > 2;
        // if (shouldShowLeftDots) {
        //     setLeftDots(true);
        // }

        // 1+1 , 168 = 2
        // 56+1, 168 = 57
        //zwraca mniejszą liczbę  => aktualna strona + minimalna liczba przycisków lub suma wszsystkich stron
        const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPageCount);
        const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

        /*
        2. suma wszystkich jest większa niż lista paginacji, ale tylko kropki po prawej stronie są widoczne
        */
        if (!shouldShowLeftDots && shouldShowRightDots) {
            let leftItemCount = 3 + 2 * siblingCount;

            setLeftRange(() => rangeCalc(1, leftItemCount));
            setLeftDots(true);
            setMiddleRange([]);
            setRightDots(false);
            setRightRange([totalPageCount]);
        }
        /*
    	Case 3: No right dots to show, but left dots to be shown
        */
        if (shouldShowLeftDots && !shouldShowRightDots) {
            let rightItemCount = 3 + 2 * siblingCount;

            setLeftRange([firstPageIndex]);
            setLeftDots(false);
            setMiddleRange([]);
            setRightDots(true);
            setRightRange(() => rangeCalc(totalPageCount - rightItemCount + 1, totalPageCount));
        }

        /*
    	Case 4: Both left and right dots to be shown
    */
        if (shouldShowLeftDots && shouldShowRightDots) {
            setLeftRange([firstPageIndex]);
            setLeftDots(true);
            setMiddleRange(() => rangeCalc(leftSiblingIndex, rightSiblingIndex));
            setRightDots(true);
            setRightRange([lastPageIndex]);
        }
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

                        <PaginationRange currentPage={currentPage} range={leftRange} />

                        {leftDots && <span>...</span>}

                        <PaginationRange currentPage={currentPage} range={middleRange} />

                        {rightDots && <span>...</span>}

                        <PaginationRange currentPage={currentPage} range={rightRange} />

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
