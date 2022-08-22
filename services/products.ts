interface StoreApiResponse {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
}

export const countOfProducts = async () => {
    const take = 4000;
    let offset = 0;
    let productsCount = 0;
    let flag = true;

    while (flag) {
        const res = await fetch(`https://naszsklep-api.vercel.app/api/products?take=${take}&offset=${offset}`);
        const data = await res.json();

        if (data.length === 0) {
            flag = false;
            break;
        }
        productsCount += data.length;
        offset += take;
    }

    return productsCount;
};

export const fetchProducts = async (take: number, offset: number) => {
    const res = await fetch(`https://naszsklep-api.vercel.app/api/products?take=${take}&offset=${offset}`);
    const product: StoreApiResponse[] | null = await res.json();

    return product;
};
