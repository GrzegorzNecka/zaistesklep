import { useContext } from "react";
import { createContext } from "react";
import { CartState } from "components/Cart/types";
import { useCartItems } from "./useCartItems";

export const CartStateContext = createContext<CartState | null>(null);

export const CartStateContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [cartItems, addItems, removeItems] = useCartItems();

    return (
        <CartStateContext.Provider
            value={{
                items: cartItems || [],
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

    if (!cartState) {
        throw new Error("you forgot CartStateContextProvider");
    }

    return cartState;
};
