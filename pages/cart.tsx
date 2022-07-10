import { useCartState } from "components/Cart/CartContext";
import { Main } from "components/Main";

const CartContent = () => {
    const cartState = useCartState();
    return (
        <div className="col-span-2">
            <ul className="divide-y divide-gray-200">
                {cartState.items.map((item, index) => {
                    return (
                        <li key={index}>
                            <div className="flex justify-between">
                                <div> {item.title}</div>
                                <div>
                                    {item.price}
                                    <button className="ml-4 text-red-500">usuń</button>
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

const CartSummary = () => {
    const cartState = useCartState();
    return (
        <div>
            podsumowanie koszyka
            <div>Liczba elementów: {cartState.items.length}</div>
        </div>
    );
};

const CartPage = () => {
    return (
        <Main>
            <div className="grid grid-cols-3 gap-8">
                <CartContent />
                <CartSummary />
            </div>
        </Main>
    );
};

export default CartPage;
