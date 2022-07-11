import { useContext } from "react";
import { createContext } from "react";
import { useState } from "react";

interface CartItem {
    price: number;
    title: string;
    count: number;
}

interface CartState {
    items: CartItem[];
    addItemToCart: (item: CartItem) => void;
}

// createContext()
export const CartStateContext = createContext<CartState | null>(null);

// context.provider.value
const initialContextValue: CartItem[] = [{ price: 21.37, title: "Koszulka", count: 1 }];

// context.provider
export const CartStateContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [cartItems, setCartItems] = useState<CartItem[]>(initialContextValue);

    return (
        <CartStateContext.Provider
            value={{
                items: cartItems,
                addItemToCart: (item) => {
                    setCartItems((prevState) => {
                        const existingItem = prevState.find((existingItem) => existingItem.title === item.title);
                        //6:40
                        if (!existingItem) {
                            return [...prevState, item];
                        }
                    });
                },
            }}
        >
            {children}
        </CartStateContext.Provider>
    );
};

// useContext()
export const useCartState = () => {
    const cartState = useContext(CartStateContext);

    if (!cartState) {
        throw new Error("you forgot CartStateContextProvider");
    }

    return cartState;
};
