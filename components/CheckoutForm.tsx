//https://tailwindui.com/components/ecommerce/components/checkout-forms

const CheckoutForm = () => {
    return (
        <div className="flex flex-col md:w-full">
            <h2 className="mb-4 font-bold md:text-xl text-heading ">Shipping Address</h2>
            <form className="justify-center w-full mx-auto">
                <div className="">
                    <div className="space-x-0 lg:flex lg:space-x-4">
                        <div className="w-full lg:w-1/2">
                            <label htmlFor="firstName" className="block mb-3 text-sm font-semibold text-gray-500">
                                First Name
                            </label>
                            <input
                                name="firstName"
                                type="text"
                                placeholder="First Name"
                                className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                            />
                        </div>
                        <div className="w-full lg:w-1/2 ">
                            <label htmlFor="firstName" className="block mb-3 text-sm font-semibold text-gray-500">
                                Last Name
                            </label>
                            <input
                                name="Last Name"
                                type="text"
                                placeholder="Last Name"
                                className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                            />
                        </div>
                    </div>
                    <div className="mt-4">
                        <div className="w-full">
                            <label htmlFor="Email" className="block mb-3 text-sm font-semibold text-gray-500">
                                Email
                            </label>
                            <input
                                name="Last Name"
                                type="text"
                                placeholder="Email"
                                className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                            />
                        </div>
                    </div>
                    <div className="mt-4">
                        <div className="w-full">
                            <label htmlFor="Address" className="block mb-3 text-sm font-semibold text-gray-500">
                                Address
                            </label>
                            <textarea
                                className="w-full px-4 py-3 text-xs border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                                name="Address"
                                placeholder="Address"
                            ></textarea>
                        </div>
                    </div>
                    <div className="space-x-0 lg:flex lg:space-x-4">
                        <div className="w-full lg:w-1/2">
                            <label htmlFor="city" className="block mb-3 text-sm font-semibold text-gray-500">
                                City
                            </label>
                            <input
                                name="city"
                                type="text"
                                placeholder="City"
                                className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                            />
                        </div>
                        <div className="w-full lg:w-1/2 ">
                            <label htmlFor="postcode" className="block mb-3 text-sm font-semibold text-gray-500">
                                Postcode
                            </label>
                            <input
                                name="postcode"
                                type="text"
                                placeholder="Post Code"
                                className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                            />
                        </div>
                    </div>
                    <div className="flex items-center mt-4">
                        <label className="flex items-center text-sm group text-heading">
                            <input
                                type="checkbox"
                                className="w-5 h-5 border border-gray-300 rounded focus:outline-none focus:ring-1"
                            />
                            <span className="ml-2">Save this information htmlFor next time</span>
                        </label>
                    </div>
                    <div className="relative pt-3 xl:pt-6">
                        <label htmlFor="note" className="block mb-3 text-sm font-semibold text-gray-500">
                            {" "}
                            Notes (Optional)
                        </label>
                        <textarea
                            name="note"
                            className="flex items-center w-full px-4 py-3 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-600"
                            placeholder="Notes htmlFor delivery"
                        ></textarea>
                    </div>
                    <div className="mt-4">
                        <button className="w-full btn-custom-primary">Process</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default CheckoutForm;
