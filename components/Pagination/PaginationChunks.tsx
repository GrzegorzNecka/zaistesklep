import Link from "next/link";

interface PaginationListProps {
    list: number | number[];
}

export const PaginationList = ({ list }: PaginationListProps) => {
    if (Array.isArray(list)) {
        return list.map((item: number) => {
            return (
                <li key={item} className="inline-block">
                    <Link href={`/products/list/${item}`}>
                        <a className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium">
                            {item}
                        </a>
                    </Link>
                </li>
            );
        });
    }

    return (
        <Link href={`/products/list/${list}`}>
            <a className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium">
                {list}
            </a>
        </Link>
    );
};

interface PaginationDots {
    isDots: boolean;
}

export const PaginationDots = ({ isDots }: PaginationDots) => {
    return isDots && <span>...</span>;
};
