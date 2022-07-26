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
        firstName: yup.string().min(3, "first NAme has to be longer than 3 characters!").required(),
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
        confirm: yup.boolean().oneOf([true], "You must accept the terms and conditions"),
    })
    .required();

export type CheckoutFormData = yup.InferType<typeof checkoutFormSchema>;

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
                                useForm={{ register, formState }}
                            />
                        </div>
                        <div className="w-full lg:w-1/2 ">
                            <label htmlFor="lastName" className="block mb-3 text-sm font-semibold text-gray-500">
                                Last Name
                            </label>
                            <FormInput
                                type="text"
                                title="Last Name"
                                name="lastName"
                                useForm={{ register, formState }}
                                // required="false"
                                // validate={false}
                            />
                        </div>
                    </div>
                    <div className="mt-4">
                        <div className="w-full">
                            <label htmlFor="emailAdress" className="block mb-3 text-sm font-semibold text-gray-500">
                                Email
                            </label>
                            <FormInput
                                type="email"
                                title="Email"
                                name="emailAdress"
                                useForm={{ register, formState }}
                            />
                        </div>
                    </div>
                    <div className="mt-4">
                        <div className="w-full">
                            <label htmlFor="address" className="block mb-3 text-sm font-semibold text-gray-500">
                                Address
                            </label>
                            <FormInput
                                type="text"
                                title="Address"
                                name="emailAdress"
                                useForm={{ register, formState }}
                            />
                        </div>
                    </div>
                    <div className="space-x-0 lg:flex lg:space-x-4">
                        <div className="w-full lg:w-1/2">
                            <label htmlFor="city" className="block mb-3 text-sm font-semibold text-gray-500">
                                City
                            </label>
                            <FormInput type="text" title="City" name="city" useForm={{ register, formState }} />
                        </div>
                        <div className="w-full lg:w-1/2 ">
                            <label htmlFor="postalCode" className="block mb-3 text-sm font-semibold text-gray-500">
                                Postcode
                            </label>
                            <FormInput
                                type="text"
                                title="Postcode"
                                name="postalCode"
                                useForm={{ register, formState }}
                            />
                        </div>
                    </div>
                    <h3 className="mt-12 mb-4 font-bold md:text-lg text-heading ">Payment Details</h3>
                    <div className="space-x-0 lg:flex lg:space-x-4">
                        <div className="w-full lg:w-1/2">
                            <label htmlFor="nameOnCard" className="block mb-3 text-sm font-semibold text-gray-500">
                                Name on Card
                            </label>
                            <FormInput
                                type="text"
                                title="name on Card"
                                name="nameOnCard"
                                useForm={{ register, formState }}
                            />
                        </div>
                        <div className="w-full lg:w-1/2 ">
                            <label htmlFor="cardNumber" className="block mb-3 text-sm font-semibold text-gray-500">
                                Card number
                            </label>

                            <FormInput
                                type="text"
                                title="Card Number"
                                name="cardNumber"
                                useForm={{ register, formState }}
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
                                useForm={{ register, formState }}
                                // required={true}
                                // validate={true}
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

                            <FormInput type="text" title="CVC" name="cvc" useForm={{ register, formState }} />
                        </div>
                    </div>

                    <div className="flex items-center mt-4">
                        <label htmlFor=" confirm" className="flex items-center text-sm group text-heading">
                            {/* <input
                                type="checkbox"
                                className="w-5 h-5 border border-gray-300 rounded focus:outline-none focus:ring-1"
                            /> */}
                            <FormInput name="confirm" type="checkbox" useForm={{ register, formState }} />

                            <span className="ml-2">I accept the all terms </span>
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
