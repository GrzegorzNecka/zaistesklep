import Link from "next/link";

interface PaginationRangeProps {
    range: number[];
    currentPage: number;
}

export const PaginationRange = ({ range, currentPage }: PaginationRangeProps) => {
    return (
        <>
            {range.map((item) => {
                return (
                    <li key={item}>
                        <Link href={`/products/list/${item}`}>
                            <a
                                className={`border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium  ${
                                    item === currentPage ? "border-indigo-500 text-indigo-600 pointer-events-none" : ""
                                } `}
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
