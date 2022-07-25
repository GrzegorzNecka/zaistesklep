import CheckoutForm from "components/CheckoutForm";
import CheckoutSummary from "components/CheckoutSummary";
import { Main } from "components/Main";
import React from "react";

const CheckoutPage = () => {
    return (
        <Main>
            <div className="flex flex-col w-full px-0 mx-auto md:flex-row">
                <CheckoutForm />
                <CheckoutSummary />
            </div>
        </Main>
    );
};

export default CheckoutPage;
