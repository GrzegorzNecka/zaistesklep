export const validateCreditCardDate = () => {
    const date = Number(new Date().getFullYear().toString().slice(-2));
    const arr = [];
    let d = date;

    for (let i = 1; i <= 5; i++) {
        arr.push(d);
        d++;
    }

    const regexp = new RegExp(`^(0[1-9]|1[012])/(${arr.join("|")})`);

    return regexp;
};
