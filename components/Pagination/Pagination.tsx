import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { usePagination } from "./usePagination";

type Pagination = Array<number>;

const Pagination = ({ currentPage, totalCount }) => {
    const pageSize = 25;
    const siblingCount = 1;

    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize,
    });
    console.log("🚀 ~ file: Pagination.tsx ~ line 19 ~ Pagination ~ paginationRange", paginationRange);

    // if (currentPage === 0 || paginationRange!.length < 2) {
    //     return null;
    // }

    // let lastPage = paginationRange![paginationRange!.length - 1];

    return (
        <nav className=" w-full sm:border-t border-gray-200 px-4 flex items-center  pb-16 justify-center sm:px-0 mt-2">
            <div className="hidden sm:-mt-px sm:flex">
                <div>
                    {`page number: ${currentPage}`} {`-`} {`count of products: ${totalCount} `}
                    {`pages: ${Math.floor(totalCount / 25)} `}
                </div>
                <ul>
                    <br />

                    {/* {pagination.map((page) => (
                        <li key={page} className="inline-block">
                            <Link href={`/products/page/${page}`}>
                                <a className={page !== currentPage ? inactiveClassName : activeClassName}>{page}</a>
                            </Link>
                        </li>
                    ))} */}
                </ul>

                <p className=" py-10"> {`wynik : ${paginationRange}`}</p>
            </div>
        </nav>
    );
};

export default Pagination;
function classnames(arg0: string, arg1: { disabled: boolean }): string | undefined {
    throw new Error("Function not implemented.");
}
