import Link from "next/link";
import { useCartState } from "./CartContext";
import { CartItem } from "./types";

export default function CartBar() {
    const cartState = useCartState();

    return (
        <div>
            <Link href="/cart">
                <a>
                    <div className=" flex">
                        <span> {cartState?.totalLength}</span>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                            />
                        </svg>
                    </div>
                </a>
            </Link>
        </div>
    );
}
