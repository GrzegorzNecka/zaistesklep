import { useContext } from "react";
import { createContext } from "react";
import { CartState } from "components/Cart/types";
import { useCartItems } from "./useCartItems";
import { changeToCurrency, moveTheComa } from "utils/currency";

export const CartStateContext = createContext<CartState | null>(null);

export const CartStateContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [cartItems, loader, addItems, removeItems] = useCartItems();
    // const cartState = useCartState();

    return (
        <CartStateContext.Provider
            value={{
                items: cartItems || [],
                totalCount: 0,
                fullPrice: 0,
                shippingTax: 1000, //10zł
                loader,
                addItemToCart: (item) => {
                    addItems(item);
                },
                removeItemFromCart: (id) => removeItems(id),
            }}
        >
            {children}
        </CartStateContext.Provider>
    );
};

export const useCartState = () => {
    const cartState = useContext(CartStateContext);

    const itemsCount = cartState?.items.map((obj) => obj.count);
    const totalCount = itemsCount?.reduce((prev, current) => prev + current, 0);

    // getFullPrice

    const getFullItemsPrice = cartState?.items.map((obj) => {
        const price = obj.price;
        const count = obj.count;
        return count * price;
    });

    const totalPrice = getFullItemsPrice?.reduce((prev, current) => prev + current, 0) || 0;

    if (!cartState) {
        throw new Error("you forgot CartStateContextProvider");
    }

    return { ...cartState, totalCount, totalPrice };
};
