import { useCartState } from "components/Cart/CartContext";
import { XIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { changeToCurrency, moveTheComa } from "utils/currency";
import Link from "next/link";

const CheckoutSummary = () => {
    const cartState = useCartState();
    return (
        <div className="flex flex-col w-full ml-0 lg:ml-12 lg:w-2/5">
            <div className="pt-12 md:pt-0 2xl:ps-4">
                <h2 className="text-xl font-bold">Order Summary</h2>
                <div className="mt-8">
                    <div className="flex flex-col space-y-4">
                        <ul className="divide-y divide-gray-200">
                            {cartState.items.map((item, index) => {
                                return (
                                    <>
                                        <span role="separator" className=" divide-y divide-gray-200"></span>
                                        <li className=" py-4 flex space-x-3" key={index}>
                                            <div className="">
                                                <Image
                                                    // layout="responsive"
                                                    src={item.imgUrl}
                                                    alt="cart-image"
                                                    width={80}
                                                    height={80}
                                                    objectFit="contain"
                                                    objectPosition="center"
                                                />
                                            </div>
                                            <div className="grow">
                                                <h3 className="text-xl font-bold">
                                                    {
                                                        <Link href={`/product/${item.slug}`}>
                                                            <a className="hover:underline">{item.title}</a>
                                                        </Link>
                                                    }
                                                </h3>

                                                <p className="text-sm">count : {item.count} </p>
                                                <span className="text-red-600">
                                                    price: {changeToCurrency(moveTheComa(item.price))}
                                                </span>
                                            </div>
                                            <button onClick={() => cartState.removeItemFromCart(item.id)}>
                                                <XIcon aria-label="usuń element" className="w-6 h-6"></XIcon>
                                            </button>
                                        </li>
                                    </>
                                );
                            })}
                        </ul>
                    </div>
                </div>
                <div className="flex p-4 mt-4">
                    <h2 className="text-xl font-bold">ITEMS : {cartState.totalCount}</h2>
                </div>
                <div className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                    Subtotal<span className="ml-2">$40.00</span>
                </div>
                <div className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                    Shipping Tax<span className="ml-2">$10</span>
                </div>
                <div className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                    Total<span className="ml-2">$50.00</span>
                </div>
            </div>
        </div>
    );
};

export default CheckoutSummary;
