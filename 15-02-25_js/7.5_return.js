// function add(a, b) {
//   console.log(a + b);
// }
// add(20, 30);

// function add(a, b) {
//   return a + b;
// }
// let value = add(20, 30);
// console.log(value);

// function multiply(a, b) {
//   let result = a * b;
//   return result;
// }
// console.log(multiply(5, 20));

function add(a, b) {
  return a + b;
}
function minus(a, b) {
  return a - b;
}
let value = minus(add(30, 40), 20);

console.log(value);
