export const validateCreditCardDate = (value: string) => {
    if (value.length !== 5) {
        return "Write date in correct pattern MM/YY";
    }

    const [month, year] = value.split("/");

    if (Number(month) > 12) {
        return "Write correct Month";
    }

    if (Number(year) > 22) {
        return "Write correct Year";
    }

    return true;
};
