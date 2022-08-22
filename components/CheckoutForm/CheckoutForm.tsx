//https://tailwindui.com/components/ecommerce/components/checkout-forms

// import { ChangeEventHandler, FormEventHandler, useState } from "react";
import { useForm } from "react-hook-form";
import { validateCreditCardDate } from "utils/zadanie_validations";
import FormInput from "./FormInput";
// import { CheckoutFormData } from "./types";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

//https://www.youtube.com/watch?v=cTY_L1X_oC4

yup.setLocale({
    mixed: {
        required: "to pole jest wymagane",
        oneOf: "to pole wymaga wartości: ${values}",
    },
    string: {
        email: "email jest wymagany w odpowiednim formacie ",
        min: "minimalna liczna znaków ${min}",
        length: "to pole wymaga ${length} znaków",
    },
});

const checkoutFormSchema = yup
    .object({
        firstName: yup.string().required().min(3).trim(),
        lastName: yup.string().required().min(3).trim(),
        emailAdress: yup.string().required().email().trim(),
        address: yup.string().required().trim(),
        city: yup.string().required().trim(),
        postalCode: yup
            .string()
            .required()
            .matches(/^[0-9]{2}-[0-9]{3}/, "kod pocztowy powienien posiadać zapid: 00-000")
            .trim(),

        note: yup.string(),
        nameOnCard: yup.string().oneOf(["VISA", "MASTERCARD"], "to pole przyjmuje tylko: VISA, MASTERCARD"),
        cardNumber: yup.string().required().length(26),
        expirationDate: yup
            .string()
            .required()
            .matches(
                validateCreditCardDate(),
                "użyj dokładnie zapisu: MM/YY. wartość YY to maksymalnie obecby rok + 4 lata"
            )
            .trim(),
        cvc: yup
            .string()
            .required()
            .matches(/^[0-9]{4}/, "numer CVC składa się z 4 cyfr")
            .trim(),
        acceptTerms: yup.string().oneOf(["true"], "potwierdzenie warunków jest obowiązkowe"),
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
                                placeholder="First Name "
                                useForm={{ register, formState }}
                            >
                                First Name
                            </FormInput>
                        </div>
                        <div className="w-full lg:w-1/2 ">
                            <FormInput
                                type="text"
                                placeholder="Last Name"
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
                    <div className="mt-4 space-x-0 lg:flex lg:space-x-4">
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
                            <label htmlFor="nameOnCard" className="block mb-3 text-sm font-semibold text-gray-500">
                                Name on Card
                            </label>
                            <select
                                className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-black"
                                {...register("nameOnCard")}
                            >
                                <option value="VISA">VISA</option>
                                <option value="MASTERCARD">MASTERCARD</option>
                            </select>
                            <span role="alert" className="w-full inline-bloc text-xs text-rose-600">
                                {formState.errors.nameOnCard?.message}
                            </span>
                        </div>
                        <div className="w-full lg:w-1/2 ">
                            <FormInput
                                type="text"
                                placeholder="Card Number"
                                name="cardNumber"
                                useForm={{ register, formState }}
                            >
                                Card number
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
