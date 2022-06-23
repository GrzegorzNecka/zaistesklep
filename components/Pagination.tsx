import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Pagination = () => {
    const pagesCount = [...Array(10).keys()].map((p) => p + 1);
    const router = useRouter();
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        if (typeof router.query.page_id !== "string") {
            setCurrentPage(1);
            return;
        }

        const pageNumber = isNaN(parseInt(router.query.page_id)) ? 1 : parseInt(router.query.page_id);
        setCurrentPage(pageNumber);
    }, [router]);

    const activeClassName =
        "border-indigo-500 text-indigo-600 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium";
    const inactiveClassName =
        "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium";

    return (
        <nav className=" w-full sm:border-t border-gray-200 px-4 flex items-center  pb-16 justify-center sm:px-0 mt-2">
            <div className="hidden sm:-mt-px sm:flex">
                <ul>
                    {pagesCount.map((page) => (
                        <li key={page} className="inline-block">
                            <Link href={`/products/page/${page}`}>
                                <a className={page !== currentPage ? inactiveClassName : activeClassName}>{page}</a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Pagination;
