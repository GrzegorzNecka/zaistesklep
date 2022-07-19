import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { usePagination } from "./usePagination";
import { PaginationList, PaginationDots } from "components/Pagination/PaginationChunks";

interface PaginationProps {
    currentPage: number;
    totalCount: number;
}

const Pagination = ({ currentPage, totalCount }: PaginationProps) => {
    const siblingCount = 3;
    const pageSize = 25;

    const paginationLogic = usePagination({ totalCount, pageSize, siblingCount, currentPage });

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
