/* OBJECTS */

const person = {
  name: 'Max',
  age: 25,
  hobbies: ['coding', 'cooking', 'running'],
  greet: function() {
    alert('Hi there!')
  },
};

// add property
person.isAdmin = true;

// delete property
delete person.age;

console.log(person)