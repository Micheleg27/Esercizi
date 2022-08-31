const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

const {id: i, firstName: nomen, lastName: cognomen, age: eta } = person;
console.log(i,nomen,cognomen,eta);