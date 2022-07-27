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
        firstName: yup
            .string()
            .min(3, "first Name has to be longer than 3 characters!")
            .required("first name  is required"),
        lastName: yup
            .string()
            .min(3, "last Name has to be longer than 3 characters!")
            .required("last name  is required"),
        emailAdress: yup
            .string()
            .email("the email must have a specific format like @ etc")
            .required("email adress is required"),
        address: yup.string().required("adress  is required"),
        city: yup.string().required("city is required"),
        postalCode: yup
            .string()
            .matches(/^[0-9]{2}-[0-9]{3}/, "post code have to contain only numbers and look like 00-000")
            .required("post code is required"),
        note: yup.string(),
        nameOnCard: yup.string().required("name on card is required"),
        cardNumber: yup.string().required("card number is required"),
        expirationDate: yup.string().required("expiration date is required"),
        cvc: yup.string().required("CVC number is required"),
        acceptTerms: yup.boolean().oneOf([true], "Accept terms is required"),
    })
    .required();

export type CheckoutFormData = yup.InferType<typeof checkoutFormSchema>;

const CheckoutForm = () => {
    const { register, setValue, handleSubmit, formState } = useForm<CheckoutFormData>({
        resolver: yupResolver(checkoutFormSchema),
    });

    const onSubmit = handleSubmit((data) => console.log(data));

    return (
        <div className="flex flex-col md:w-full">
            <h2 className="mb-4 font-bold md:text-xl text-heading ">Shipping Address</h2>
            <form onSubmit={onSubmit} className="justify-center w-full mx-auto">
                <div className="">
                    <div className="space-x-0 lg:flex lg:space-x-4">
                        <div className="w-full lg:w-1/2">
                            <FormInput
                                type="text"
                                name="firstName"
                                placeholder="First Name (min 3 characters)"
                                useForm={{ register, formState }}
                            >
                                First Name
                            </FormInput>
                        </div>
                        <div className="w-full lg:w-1/2 ">
                            <FormInput
                                type="text"
                                placeholder="First Name (min 3 characters)"
                                name="lastName"
                                useForm={{ register, formState }}
                            >
                                Last Name
                            </FormInput>
                        </div>
                    </div>
                    <div className="mt-4">
                        <div className="w-full">
                            <FormInput
                                type="email"
                                placeholder="Email"
                                name="emailAdress"
                                useForm={{ register, formState }}
                            >
                                Email
                            </FormInput>
                        </div>
                    </div>
                    <div className="mt-4">
                        <div className="w-full">
                            <FormInput
                                type="text"
                                placeholder="Address"
                                name="address"
                                useForm={{ register, formState }}
                            >
                                Address
                            </FormInput>
                        </div>
                    </div>
                    <div className="space-x-0 lg:flex lg:space-x-4">
                        <div className="w-full lg:w-1/2">
                            <FormInput type="text" placeholder="City" name="city" useForm={{ register, formState }}>
                                City
                            </FormInput>
                        </div>
                        <div className="w-full lg:w-1/2 ">
                            <FormInput
                                type="text"
                                placeholder="Postcode"
                                name="postalCode"
                                useForm={{ register, formState }}
                            >
                                Post Code
                            </FormInput>
                        </div>
                    </div>
                    <h3 className="mt-12 mb-4 font-bold md:text-lg text-heading ">Payment Details</h3>
                    <div className="space-x-0 lg:flex lg:space-x-4">
                        <div className="w-full lg:w-1/2">
                            <FormInput
                                type="text"
                                placeholder="name on Card"
                                name="nameOnCard"
                                useForm={{ register, formState }}
                            >
                                Name on Card{" "}
                            </FormInput>
                        </div>
                        <div className="w-full lg:w-1/2 ">
                            <FormInput
                                type="text"
                                placeholder="Card Number"
                                name="cardNumber"
                                useForm={{ register, formState }}
                            >
                                Card number{" "}
                            </FormInput>
                        </div>
                        <div className="w-full lg:w-1/2 ">
                            <FormInput
                                type="text"
                                placeholder="Expiration date"
                                name="expirationDate"
                                useForm={{ register, formState }}
                            >
                                Expiration date (MM/YY)
                            </FormInput>
                        </div>
                        <div className="w-full lg:w-1/2 ">
                            <FormInput type="text" placeholder="CVC" name="cvc" useForm={{ register, formState }}>
                                CVC
                            </FormInput>
                        </div>
                    </div>
                    {/* //----------------------- */}
                    <div className="flex  flex-col  items-start  mt-4">
                        <FormInput type="checkbox" name="acceptTerms" useForm={{ register, formState }}>
                            Accept Terms & Conditions
                        </FormInput>
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
