function multiply(array){
  const result = [];
  for (let i = 0; i < array.length; i++){
    let temp = 1;
    for (let j = 0; j < array.length; j++) {
      if(i != j) {
        temp *= array[j];
      }
    }
    result.push(temp)
  }
  return result
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

