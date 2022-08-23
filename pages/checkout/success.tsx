import { useRouter } from "next/router";

const CheckoutSuccessPage = () => {
    const router = useRouter();

    // dzięki temu możemy odpytać stripa o status i o elementy z zamówienia
    console.log(router.query.session_id);

    return <div>udało się</div>;
};

export default CheckoutSuccessPage;
