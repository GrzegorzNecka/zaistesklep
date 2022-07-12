// react 18
/**
 * https://reactjs.org/docs/strict-mode.html#ensuring-reusable-state
Rodzi to różne ciekawe nieoczekiwane problemy, np: https://github.com/facebook/react/issues/24502
 */

import { useContext } from "react";
import { createContext } from "react";
import { useState, useEffect } from "react";

interface CartItem {
    readonly id: number;
    readonly price: number;
    readonly title: string;
    readonly count: number;
}

interface CartState {
    readonly items: readonly CartItem[];
    readonly addItemToCart: (item: CartItem) => void;
    readonly removeItemFromCart: (id: CartItem["id"]) => void;
}

// createContext()
export const CartStateContext = createContext<CartState | null>(null);

const getCartItemsFromStorage = () => {
    const itemsFromLocalStorage = localStorage.getItem("ZAISTE_SHOPPING_CART");

    if (!itemsFromLocalStorage) {
        return [];
    }

    try {
        const items = JSON.parse(itemsFromLocalStorage);
        console.log("🚀 ~ file: CartContext.tsx ~ line 30 ~ getCartItemsFromStorage ~ items", items);
        //zakładamy że items to poprawny json
        return items;
    } catch (error) {
        console.error(error);
        return [];
    }
};

const setCartItemsInStorage = (cartItems: CartItem[]) => {
    localStorage.setItem("ZAISTE_SHOPPING_CART", JSON.stringify(cartItems));
};
// context.provider
// export const CartStateContextProvider = ({ children }: { children: React.ReactNode }) => {
//     const [cartItems, setCartItems] = useState<CartItem[] | undefined>(undefined);

//     useEffect(() => {
//         setCartItems(getCartItemsFromStorage());
//     }, []);

//     useEffect(() => {
//         if (cartItems === undefined) {
//             return;
//         }

//         setCartItemsInStorage(cartItems);
//     }, [cartItems]);

//     return (
//         <CartStateContext.Provider
//             value={{
//                 items: cartItems,
//                 addItemToCart: (item) => {
//                     setCartItems((prevState) => {
//                         // return arr with existing items
//                         const existingItem = prevState.find((existingItem) => existingItem.id === item.id);

//                         if (!existingItem) {
//                             return [...prevState, item];
//                         }

//                         return prevState.map((existingItem) => {
//                             if (existingItem.id === item.id) {
//                                 return {
//                                     ...existingItem,
//                                     count: existingItem.count + 1,
//                                 };
//                             }

//                             return existingItem;
//                         });
//                     });
//                 },
//                 removeItemFromCart: (id) => {
//                     setCartItems((prevState) => {
//                         const existingItem = prevState.find((existingItem) => existingItem.id === id);

//                         if (existingItem && existingItem.count <= 1) {
//                             return prevState.filter((existingItem) => existingItem.id !== id);
//                         }

//                         return prevState.map((existingItem) => {
//                             if (existingItem.id === id) {
//                                 return {
//                                     ...existingItem,
//                                     count: existingItem.count - 1,
//                                 };
//                             }

//                             return existingItem;
//                         });
//                     });
//                 },
//             }}
//         >
//             {children}
//         </CartStateContext.Provider>
//     );
// };

export const CartStateContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [cartItems, setCartItems] = useState<CartItem[] | undefined>(undefined);

    // "ZAISTE_SHOPPING_CART"
    // 1. Odczytać z localstorage
    //   -> jeśli coś tam jest to ustawić `cartItems`
    // 2. Gdy się **coś zmieni** to zapisać do localstorage

    useEffect(() => {
        setCartItems(getCartItemsFromStorage());
    }, []); // tylko raz na początku

    useEffect(() => {
        if (cartItems === undefined) {
            return;
        }

        setCartItemsInStorage(cartItems);
    }, [cartItems]); // gdy zmieni się cartItems

    return (
        <CartStateContext.Provider
            value={{
                items: cartItems || [],
                addItemToCart: (item) => {
                    setCartItems((prevState = []) => {
                        // return arr with existing items
                        const existingItem = prevState.find((existingItem) => existingItem.id === item.id);

                        if (!existingItem) {
                            return [...prevState, item];
                        }

                        return prevState.map((existingItem) => {
                            if (existingItem.id === item.id) {
                                return {
                                    ...existingItem,
                                    count: existingItem.count + 1,
                                };
                            }

                            return existingItem;
                        });
                    });
                },
                removeItemFromCart: (id) => {
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
