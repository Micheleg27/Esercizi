function getKeys(obj) {

  //   Ho provato ad implementare un ciclo for ma il console.log esterno restuitiva undefined, commentandolo la soluzione era corretta. 
  //   Quindi ho usato questo metodo degli oggetti
  //   for (let keys in obj) {
  //     console.log(keys);
  //   }

  return Object.keys(obj);
}

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 32,
  city: 'Rome',
  job: 'Developer',
};

const keys = getKeys(person);
console.log(keys);