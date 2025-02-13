// let arr = ["Saiful", "Basher", "Uday", "Sakib", "Tamim", "Emon"];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// arr.forEach(function (el) {
//   console.log(el);
// });

// arr.forEach((el) => {
//   console.log(el);
// });

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
num.forEach(function (el) {
  if (el % 2 == 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
});
