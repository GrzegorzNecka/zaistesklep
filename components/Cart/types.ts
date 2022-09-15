export interface CartItem {
    readonly id: string;
    readonly price: number;
    readonly title: string;
    readonly count: number;
    readonly imgUrl: string;
    readonly slug: string;
}

export interface CartState {
    readonly items: readonly CartItem[];
    readonly loader: boolean;
    readonly addItemToCart: (item: CartItem) => void;
    readonly removeItemFromCart: (id: CartItem["id"]) => void;
    readonly totalCount: number;
    readonly fullPrice: number;
    readonly shippingTax: number;
}

//--------- API --------------

export interface Token {
    token: string;
}

export interface ResponseCartItems {
    status: string;
    cartItems?: CartItem[];
    error?: string;
    message?: string;
}

export interface State {
    token: string;
    cartItems: CartItem[];
}
