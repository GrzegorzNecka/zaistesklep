import { useState, useEffect } from "react";
import { getCartItemsFromStorage, setCartItemsInStorage } from "./services/localStorage";
import { CartItem } from "components/Cart/types";

export const useCartItems = () => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    useEffect(() => {
        setCartItems(getCartItemsFromStorage());
    }, []);

    useEffect(() => {
        setCartItemsInStorage(cartItems);
    }, [cartItems]);

    const addItems = (item: CartItem) => {
        setCartItems((prevState = []) => {
            const existingItem = prevState.find((prevItem) => prevItem.id === item.id);

            if (!existingItem) {
                return [...prevState, item];
            }

            return prevState.map((prevItem) => {
                if (prevItem.id === item.id) {
                    return {
                        ...prevItem,
                        count: prevItem.count + 1,
                    };
                }

                return prevItem;
            });
        });
    };

    const removeItems = (id: CartItem["id"]) => {
        setCartItems((prevState = []) => {
            const existingItem = prevState.find((eItem) => eItem.id === id);

            if (existingItem && existingItem.count <= 1) {
                return prevState.filter((eItem) => eItem.id !== id);
            }

            return prevState.map((eItem) => {
                if (eItem.id === id) {
                    return {
                        ...eItem,
                        count: eItem.count - 1,
                    };
                }
                return eItem;
            });
        });
    };

    return [cartItems, addItems, removeItems] as const;
    /*
    
    const w tym przypadku - jesteśmy w stanie ustawić elementy tablicy jako readonly,
    i powiedzieć TypeScriptowi że zwracana tablica będzie mieć zawsze tyle samo elementów
    o określonych typach.  

    */
};
