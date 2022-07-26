//https://tailwindui.com/components/ecommerce/components/checkout-forms

import { ChangeEventHandler, FormEventHandler, useState } from "react";
import { useForm } from "react-hook-form";
import { validateCreditCardDate } from "utils/validations";
import FormInput from "./FormInput";
// import { CheckoutFormData } from "./types";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

//https://www.youtube.com/watch?v=cTY_L1X_oC4

const checkoutFormSchema = yup
    .object({
        firstName: yup.string().required(),
        lastName: yup.string().required(),
        emailAdress: yup.string().email().required(),
        address: yup.string().required(),
        city: yup.string().required(),
        postalCode: yup.string().required(),
        note: yup.string().required(),
        nameOnCard: yup.string().required(),
        cardNumber: yup.string().required(),
        expirationDate: yup.string().required(),
        cvc: yup.string().required(),
    })
    .required();

type CheckoutFormData = yup.InferType<typeof checkoutFormSchema>;

const CheckoutForm = () => {
    const { register, setValue, handleSubmit, formState } = useForm<CheckoutFormData>({
        resolver: yupResolver(checkoutFormSchema),
    });

    const onSubmit = handleSubmit((data) => console.log(data));

    // const handeleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    //     e.preventDefault();
    //     console.log(e.target);
    // };

    // const [firstName, setFirstName] = useState("");

    // const handleChangeEmailChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    //     setFirstName(e.target.value);
    // };

    return (
        <div className="flex flex-col md:w-full">
            <h2 className="mb-4 font-bold md:text-xl text-heading ">Shipping Address</h2>
            <form onSubmit={onSubmit} className="justify-center w-full mx-auto">
                <div className="">
                    {/* <div>
                        <label htmlFor="test" className="block mb-3 text-sm font-semibold text-gray-500">
                            test
                        </label>
                        <input
                            // name="firstName"
                            type="text"
                            placeholder="First Name"
                            className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-black"
                            // value={firstName}
                            // onChange={handleChangeEmailChange}
                            {...register("test", {
                                required: "First name is required matherfucker",
                                maxLength: 20,
                            })}
                        />
                        {formState.errors.firstName?.type === "required" && (
                            <span role="alert" className="w-full inline-block  text-rose-600">
                                {formState.errors.firstName.message}
                            </span>
                        )}
                    </div> */}

                    <div className="space-x-0 lg:flex lg:space-x-4">
                        <div className="w-full lg:w-1/2">
                            <label htmlFor="firstName" className="block mb-3 text-sm font-semibold text-gray-500">
                                First Name
                            </label>
                            <FormInput
                                type="text"
                                title="First Name"
                                name="firstName"
                                register={register}
                                formState={formState}
                                required="First name is required matherfucker"
                                validate={false}
                                maxLength={20}
                            />
                        </div>
                        <div className="w-full lg:w-1/2 ">
                            <label htmlFor="lastName" className="block mb-3 text-sm font-semibold text-gray-500">
                                Last Name
                            </label>
                            <input
                                {...register("lastName")}
                                type="text"
                                placeholder="Last Name"
                                className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-black"
                            />
                        </div>
                    </div>
                    <div className="mt-4">
                        <div className="w-full">
                            <label htmlFor="emailAdress" className="block mb-3 text-sm font-semibold text-gray-500">
                                Email
                            </label>
                            <input
                                {...register("emailAdress")}
                                type="email"
                                placeholder="Email"
                                id="email=adress"
                                autoComplete="email"
                                className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-black"
                            />
                        </div>
                    </div>
                    <div className="mt-4">
                        <div className="w-full">
                            <label htmlFor="address" className="block mb-3 text-sm font-semibold text-gray-500">
                                Address
                            </label>
                            <input
                                type="text"
                                className="w-full px-4 mb-3 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-black"
                                {...register("address")}
                                placeholder="Address"
                            ></input>
                        </div>
                    </div>
                    <div className="space-x-0 lg:flex lg:space-x-4">
                        <div className="w-full lg:w-1/2">
                            <label htmlFor="city" className="block mb-3 text-sm font-semibold text-gray-500">
                                City
                            </label>
                            <input
                                {...register("city")}
                                type="text"
                                placeholder="City"
                                className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-black"
                            />
                        </div>
                        <div className="w-full lg:w-1/2 ">
                            <label htmlFor="postalCode" className="block mb-3 text-sm font-semibold text-gray-500">
                                Postcode
                            </label>
                            <input
                                {...register("postalCode")}
                                type="text"
                                placeholder="Post Code"
                                className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-black"
                            />
                        </div>
                    </div>
                    <h3 className="mt-12 mb-4 font-bold md:text-lg text-heading ">Payment Details</h3>
                    <div className="space-x-0 lg:flex lg:space-x-4">
                        <div className="w-full lg:w-1/2">
                            <label htmlFor="nameOnCard" className="block mb-3 text-sm font-semibold text-gray-500">
                                Name on Card
                            </label>
                            <input
                                {...register("nameOnCard")}
                                type="text"
                                placeholder="name on Card"
                                className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-black"
                            />
                        </div>
                        <div className="w-full lg:w-1/2 ">
                            <label htmlFor="cardNumber" className="block mb-3 text-sm font-semibold text-gray-500">
                                Card number
                            </label>
                            <input
                                {...register("cardNumber")}
                                type="text"
                                placeholder="Card Number"
                                className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-black"
                            />
                        </div>
                        <div className="w-full lg:w-1/2 ">
                            <label htmlFor="expirationDate" className="block mb-3 text-sm font-semibold text-gray-500">
                                Expiration date (MM/YY)
                            </label>
                            <FormInput
                                type="text"
                                title="Expiration date"
                                name="expirationDate"
                                register={register}
                                formState={formState}
                                required={true}
                                validate={true}
                            />

                            {/* <input
                                {...register("expirationDate", {
                                    required: true,
                                    validate: (value) => validateCreditCardDate(value),
                                })}
                                type="text"
                                placeholder="Expiration date"
                                className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-black"
                            />

                            <span role="alert" className="w-full inline-block  text-rose-600">
                                {errors.expirationDate?.message}
                            </span> */}
                        </div>
                        <div className="w-full lg:w-1/2 ">
                            <label htmlFor="cvc" className="block mb-3 text-sm font-semibold text-gray-500">
                                CVC
                            </label>

                            <input
                                {...register("cvc", { required: false })}
                                type="text"
                                placeholder="cvc"
                                className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-black"
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
                            Notes (Optional)
                        </label>
                        <textarea
                            {...register("note")}
                            className="flex items-center w-full px-4 py-3 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-black"
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
