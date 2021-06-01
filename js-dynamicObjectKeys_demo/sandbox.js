
let state = {

   name: "Tamil Nadu",
   acronymn: "TN",
   products: []

};

function updateState(key, value){
  state[key] = value;
}

updateState('acronymn', 'TNM');
updateState('products', ['mango', 'rice']);

console.log(state);

let val = state.products;
console.log(val);
for (const iterator of val) {
  console.log(iterator);
}