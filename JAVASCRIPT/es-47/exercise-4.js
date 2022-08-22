const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

const {id = 1, firstName = "Mario", lastName = "Rossi", age = 25} = person;
console.log(id, firstName, lastName, age);