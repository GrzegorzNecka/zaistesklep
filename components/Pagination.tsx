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

// import { useRouter } from "next/router";
// import { useQuery } from "react-query";
// import Link from "next/link";

// const itemsNumberToTake = 10;

// const getProducts = async (page: number) => {
//     const res = await fetch(
//         `https://naszsklep-api.vercel.app/api/products?take=${itemsNumberToTake}&offset=${page * 25}`
//     );
//     const data: StoreApiResponse[] = await res.json();
//     return data;
// };

// const Pagination = () => {
//     const router = useRouter();
//     const first = <T,>(arr: T | T[]): T | undefined => (Array.isArray(arr) ? arr[0] : arr);
//     const page = Number.parseInt(first(router.query.page) || "1");
//     const { data, isLoading, error } = useQuery(["products", page], () => getProducts(page), {
//         keepPreviousData: true,
//     });

//     if (isLoading) {
//         return <h1>Loading...</h1>;
//     }

//     if (!data || error) {
//         return <h1>Coś poszło nie tak</h1>;
//     }

//     const indicators = new Array(10).fill(0);
//     return (
//         <>
//             <div>
//                 {data.map((product: StoreApiResponse) => (
//                     <div key={product.id}>{product.title}</div>
//                 ))}
//             </div>
//             <nav className="border-t border-gray-200 px-4 flex items-center justify-between sm:px-0">
//                 <div className="hidden md:-mt-px md:flex">
//                     {indicators.map((indicator, index) => (
//                         <Link href={`/pagination/${index + 1}`} key={index}>
//                             <a className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium">
//                                 {index + 1}
//                             </a>
//                         </Link>
//                     ))}
//                 </div>
//             </nav>
//         </>
//     );
// };

// export default Pagination;

// export interface StoreApiResponse {
//     id: number;
//     title: string;
//     price: number;
//     description: string;
//     category: string;
//     rating: Rating;
//     image: string;
//     longDescription: string;
// }
// export interface Rating {
//     rate: number;
//     count: number;
// }
