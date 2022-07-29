import Link from "next/link";
import { useCartState } from "./CartContext";

import { ShoppingBagIcon } from "@heroicons/react/outline";
export default function CartBar() {
    const cartState = useCartState();

    return (
        <div>
            <Link href="/cart">
                <a>
                    <div className=" flex">
                        <span> {cartState.totalCount}</span>

                        <ShoppingBagIcon className="h-6 w-6" />
                    </div>
                </a>
            </Link>
        </div>
    );
}
