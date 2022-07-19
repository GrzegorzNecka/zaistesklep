import Link from "next/link";

export const PaginationList = ({ list }) => {
    const isArray = (elem: number | number[]) => Array.isArray(elem);

    if (isArray(list)) {
        return list.map((item) => {
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

export const PaginationDots = ({ isDots }) => {
    return isDots && <span>...</span>;
};
