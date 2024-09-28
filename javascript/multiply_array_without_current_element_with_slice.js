function multiply(array){
  const product = [];
  let left = 1;
  array.forEach((value, index)=>{
    let currentProduct = 1;
    array.slice(index + 1 ).forEach((num) => {
      currentProduct *= num;
    });
    product.push(currentProduct * left);
    left*= value;
  });
  return product;
}
let inputs = [
  [1, 2, 3, 4],
  [5, -3, 1, 2],
  [2, 2, 2, 0],
  [0, 0, 0, 0],
  [-1, -2, -4]
];

for (let i = 0; i < inputs.length; i++) {
  console.log(i + 1 + "\tArray: [" + inputs[i].join(", ") + "]");
  console.log("\n\tList of products: [" + multiply(inputs[i]).join(", ") + "]");
  console.log("-".repeat(70));
}


