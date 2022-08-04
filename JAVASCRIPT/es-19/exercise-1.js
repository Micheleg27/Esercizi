const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25
};

const person2 = person1;
person2.firstName = "Simon";

// La modifica viene applicata ad entrambi gli oggetti perché i due oggetti hanno lo stesso riferimento, data la dichiarazione della const person2.

console.log(person1);
console.log(person2);