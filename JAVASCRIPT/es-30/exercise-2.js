function nicknameMap(persons) {
  let ids = persons.map(item => `${item.name}-${item.age}`);
  return ids;

  // Creare una variabile temporanea nella quale si applica il metodo map all'array impostato come parametro della funzione; in questo caso (e non solo) il metodo map ciclerà automaticamente l'array. 
  // Il parametro del metodo si configura andando a chiarire un risultato (in questo caso una concatenazione con template literals) per ogni elemento dell'array.
  // Return riporta il nuovo array.
  // La variabile "di appoggio" può essere chiamata differentemente da quella del console.log finale dato che nella dichiarazione di costante è già richiamata la funzione che contiene tale variabile d'appoggio.

}

const persons = [
  { name: 'Paul', age: 16 },
  { name: 'George', age: 17 },
  { name: 'Lucas', age: 21 },
  { name: 'Marco', age: 32 },
  { name: 'Peter', age: 18 },
  { name: 'Carl', age: 13 },
  { name: 'Simon', age: 24 },
  { name: 'Mark', age: 15 },
  { name: 'Sandra', age: 34 },
  { name: 'Alice', age: 28 }
];

const nicknames = nicknameMap(persons);
console.log(persons);
console.log(nicknames);