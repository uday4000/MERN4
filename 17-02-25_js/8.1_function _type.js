// has parameter has return
function add(a, b) {
  return a + b;
}

console.log(add(2, 3));

// has parameter no return
function add2(a, b) {
  console.log(a + b);
}

add2(10, 10);

// no parameter has return
function primeNumber() {
  return 13;
}
let value = primeNumber();
console.log(value);

// no parameter no return
function sayHello() {
  console.log("Hello World");
}
sayHello();
