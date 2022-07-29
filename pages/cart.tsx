import { useCartState } from "components/Cart/CartContext";
import { Main } from "components/Main";
import Link from "next/link";
import { changeToCurrency, moveTheComa } from "utils/currency";
import { TrashIcon } from "@heroicons/react/outline";

const CartContent = () => {
    const cartState = useCartState();
    return (
        <div className="col-span-2">
            <ul className="divide-y divide-gray-200">
                {cartState.items.map((item, index) => {
                    return (
                        <li className="py-3" key={index}>
                            <div className="flex items-center justify-between">
                                <div>
                                    <Link href={`/product/${item.slug}`}>
                                        <a className="hover:underline">
                                            {item.title} {`x  ${item.count}`}
                                        </a>
                                    </Link>
                                </div>
                                <div className="flex items-center">
                                    {changeToCurrency(moveTheComa(item.price))}
                                    <button
                                        onClick={() => cartState.removeItemFromCart(item.id)}
                                        className="ml-4 text-red-500"
                                    >
                                        <TrashIcon
                                            stroke="currentColor"
                                            aria-label="usuń element"
                                            strokeWidth={2}
                                            className="h-6 w-6"
                                        />
                                    </button>
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

const CartSummary = () => {
    const cartState = useCartState();

    return (
        <div>
            <h2 className="pb-2 font-bold text-lg  divide-gray-200">Podsumowanie koszyka</h2>
            <div>Liczba elementów: {cartState.items.length}</div>
            <div>Łączna Liczba wszystkich elementów: {cartState.totalCount}</div>
            <div className="pt-2  ">Suma: {changeToCurrency(moveTheComa(cartState.totalPrice))}</div>
        </div>
    );
};

const CartPage = () => {
    return (
        <Main>
            <div className="grid grid-cols-3 gap-20">
                <CartContent />
                <CartSummary />
            </div>
        </Main>
    );
};

export default CartPage;
