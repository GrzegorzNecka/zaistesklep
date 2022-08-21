import { Main } from "components/Main";
import { useRouter } from "next/router";

const CheckoutSuccessPage = () => {
    const router = useRouter();

    // dzięk itemu możemy odpytaćstripa o status i o elementy z zamówienia
    console.log(router.query.session_id);

    return <Main>udało się</Main>;
};

export default CheckoutSuccessPage;
