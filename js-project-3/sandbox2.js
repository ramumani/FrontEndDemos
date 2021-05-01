
const calcTotal = (products, tax) => {
    let total = 0;
    for (const product of products) {
        total += product + (product * tax);
    }
    return total;
};

console.log(calcTotal([10,20,30],0.2))