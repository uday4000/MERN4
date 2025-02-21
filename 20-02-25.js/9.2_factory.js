// let person1 = {
//   name: "Uday",
//   age: 28,
//   sayHello() {
//     console.log("Hello " + "" + this.name);
//   },
// };
// person1.sayHello();

function createPerson(name, age) {
  return {
    name,
    age,
    sayHello() {
      console.log("Hello " + this.name);
    },
  };
}
let person1 = createPerson("Uday", 28);
let person2 = createPerson("Sakib", 34);

console.log(person1);
