function Person(name, age) {
  (this.name = name),
    (this.age = age),
    (this.sayHello = function () {
      console.log("Hello " + this.name);
    });
}
let person1 = new Person("Uday", 28);
let person2 = new Person("Sakib", 34);

console.log(person2);
