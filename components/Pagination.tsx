import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type Pagination = Array<number>;

const Pagination = () => {
    const initialPaginationCollection = [...Array(10).keys()].map((p) => p + 1);
    const router = useRouter();

    const [paginationCollection, setPaginationCollection] = useState<Pagination>(initialPaginationCollection);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        if (typeof router.query.page_id !== "string") {
            setCurrentPage(1);
            return;
        }

        const pageNumber = isNaN(parseInt(router.query.page_id)) ? 1 : parseInt(router.query.page_id);

        if (pageNumber < 1) {
            router.push("/products/page/1");
        }

        if (!paginationCollection.includes(pageNumber)) {
            const nextPageNumber = paginationCollection.length + 1;

            if (pageNumber === nextPageNumber) {
                setPaginationCollection([...paginationCollection, pageNumber]);
            }
        }

        setCurrentPage(pageNumber);
    }, [router]);

    const activeClassName =
        "border-indigo-500 text-indigo-600 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium pointer-events-none";
    const inactiveClassName =
        "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium";

    return (
        <nav className=" w-full sm:border-t border-gray-200 px-4 flex items-center  pb-16 justify-center sm:px-0 mt-2">
            <div className="hidden sm:-mt-px sm:flex">
                <ul>
                    <li className="inline-block">
                        {currentPage >= 2 && (
                            <Link href={`/products/page/${currentPage - 1}`}>
                                <a>prev</a>
                            </Link>
                        )}
                    </li>
                    {paginationCollection.map((page) => (
                        <li key={page} className="inline-block">
                            <Link href={`/products/page/${page}`}>
                                <a className={page !== currentPage ? inactiveClassName : activeClassName}>{page}</a>
                            </Link>
                        </li>
                    ))}
                    <li className="inline-block">
                        <Link href={`/products/page/${currentPage + 1}`}>
                            <a>next</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Pagination;
