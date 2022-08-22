const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

const entries = Object.keys(person);

for (let i = 0; i < entries.length; i++) {
  console.log(`${entries[i]}: ${person[entries[i]]}`);
}

// SOLUZIONI ALTERNATIVE

// for(const entries of Object.keys(person)){
//   console.log(entries, person[entries])
// }

// for(const entries in person){
//   console.log(entries, person[entries]);
// }

// Print values of person using Object.keys