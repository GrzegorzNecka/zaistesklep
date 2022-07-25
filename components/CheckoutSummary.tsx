const CheckoutSummary = () => {
    return (
        <div className="flex flex-col w-full ml-0 lg:ml-12 lg:w-2/5">
            <div className="pt-12 md:pt-0 2xl:ps-4">
                <h2 className="text-xl font-bold">Order Summary</h2>
                <div className="mt-8">
                    <div className="flex flex-col space-y-4">
                        <div className="flex space-x-4">
                            <div>
                                <img
                                    src="https://source.unsplash.com/user/erondu/1600x900"
                                    alt="image"
                                    className="w-60"
                                />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold">Title</h2>
                                <p className="text-sm">Lorem ipsum dolor sit amet, tet</p>
                                <span className="text-red-600">Price</span> $20
                            </div>
                            <div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="flex space-x-4">
                            <div>
                                <img
                                    src="https://source.unsplash.com/collection/190727/1600x900"
                                    alt="image"
                                    className="w-60"
                                />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold">Title</h2>
                                <p className="text-sm">Lorem ipsum dolor sit amet, tet</p>
                                <span className="text-red-600">Price</span> $20
                            </div>
                            <div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex p-4 mt-4">
                    <h2 className="text-xl font-bold">ITEMS 2</h2>
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
