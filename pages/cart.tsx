import { useCartState } from "components/Cart/CartContext";
import { Main } from "components/Main";
import Link from "next/link";
import { changeToCurrency, moveTheComa } from "utils/currency";
import { loadStripe } from "@stripe/stripe-js";
import { TrashIcon } from "@heroicons/react/outline";
import Stripe from "stripe";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

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
    console.log("🚀 ~ file: cart.tsx ~ line 53 ~ CartSummary ~ cartState", cartState);

    const pay = async () => {
        const stripe = await stripePromise;

        if (!stripe) {
            throw new Error("something went wrong");
        }

        const res = await fetch("/api/checkout", {
            method: "POST",
            headers: { "Content-Type": "application/json;" },
            body: JSON.stringify(
                cartState.items.map((cartItem) => {
                    return {
                        slug: cartItem.slug,
                        count: cartItem.count,
                        // price_data: {
                        //     currency: "PLN",
                        //     unit_amount: item.price,
                        //     product_data: {
                        //         name: item.title,
                        //     },
                        // },
                        // quantity: item.count,
                    };
                })
            ),
        });

        // metadata: {
        //     slug: item.slug,
        //     id: item.id,
        // },
        const { session }: { session: Stripe.Response<Stripe.Checkout.Session> } = await res.json();

        await stripe.redirectToCheckout({ sessionId: session.id });
    };

    return (
        <div>
            <h2 className="pb-2 font-bold text-lg  divide-gray-200">Podsumowanie koszyka</h2>
            <div>Liczba elementów: {cartState.items.length}</div>
            <div>Łączna Liczba wszystkich elementów: {cartState.totalCount}</div>
            <div className="pt-2">Suma: {changeToCurrency(moveTheComa(cartState.totalPrice))}</div>
            <div className="mt-4">
                <button onClick={pay} type="button" className="w-full btn-custom-primary">
                    złóż zmówienie
                </button>
            </div>
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
