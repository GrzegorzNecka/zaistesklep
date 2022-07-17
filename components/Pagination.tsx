import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

// https://www.freecodecamp.org/news/build-a-custom-pagination-component-in-react/

//https://github.com/LoQeN00/nextjs-graphql-ts-shop/tree/main/components
// /https://react-query-v2.tanstack.com/reference/hydration
//https://react-query-v2.tanstack.com/guides/ssr

//https://github.com/LoQeN00/nextjs-graphql-ts-shop/blob/main/pages/products-ssg/%5BpageIndex%5D.tsx
//https://github.com/LoQeN00/nextjs-graphql-ts-shop/blob/main/components/PageSSG.tsx
//https://github.com/LoQeN00/nextjs-graphql-ts-shop/blob/main/components/PaginationSSG.tsx

type Pagination = Array<number>;

const Pagination = () => {
    const initialPagination = [...Array(10).keys()].map((p) => p + 1);
    const router = useRouter();

    const [pagination, setpagination] = useState<Pagination>(initialPagination);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        if (typeof router.query.page_id !== "string") {
            setCurrentPage(1);
            return;
        }

        const pageNumber = isNaN(parseInt(router.query.page_id)) ? 1 : parseInt(router.query.page_id);

        if (!pagination.includes(pageNumber)) {
            const nextPageNumber = pagination.length + 1;

            if (pageNumber === nextPageNumber) {
                setpagination([...pagination, pageNumber]);
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
                    {pagination.map((page) => (
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
