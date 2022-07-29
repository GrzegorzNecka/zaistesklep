export const changeToCurrency = (price: number) => {
    const formatter = new Intl.NumberFormat("pl-PL", {
        style: "currency",
        currency: "PLN",
    });

    return formatter.format(price);
};

export const moveTheComa = (price: number) => price / 100;
