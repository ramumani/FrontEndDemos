const regularPrices = [
  { productName: "Oranges", price: 10 },
  { productName: "Plums", price: 20 },
  { productName: "Strawberries", price: 50 },
  { productName: "Blueberries", price: 40 },
];

const salePrices = regularPrices.map((regularPrice) => {
    if(regularPrice.price > 30){
        return {productName: regularPrice.productName, price: regularPrice.price/2};
    }else{
        return regularPrice;
    }
});

console.log(salePrices, regularPrices);