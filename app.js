// new way (syntactic sugar)
class Person {
  name = "Max";

  constructor() {
    this.age = 25;
  }

  greet() {
    console.log(`Hi, I am ${this.name}. I am ${this.age} years old.`);
  }
}

// old way
function Person2() {
  this.name = "Manu";
  this.age = 30;
  this.greet = function () {
    console.log(`Hi, I am ${this.name}. I am ${this.age} years old.`);
  };
}

const maxPerson = new Person();
maxPerson.greet();

const manuPerson = new Person2();
manuPerson.greet();
console.dir(maxPerson)