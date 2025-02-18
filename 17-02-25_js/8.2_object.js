let person = {
  name: "Saiful Basher",
  age: 22,
  location: {
    city: "Dhaka",
    zip: 1216,
  },
  sayHello: function () {
    console.log("Hello Uday!");
  },
};
// console.log(person.location.city);
console.log(person["name"]);
