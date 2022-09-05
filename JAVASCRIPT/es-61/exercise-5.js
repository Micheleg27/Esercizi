const persons = [
  {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
  },
  {
    id: 2,
    firstName: 'Maria',
    lastName: 'Verdi',
    age: 32
  },
  {
    id: 3,
    firstName: 'Giovanni',
    lastName: 'Rossi',
    age: 35
  }
];

const jobs = [
  {
    id: 1,
    jobTitle: 'CEO'
  },
  {
    id: 2,
    jobTitle: 'Project Manager'
  },
  {
    id: 3,
    jobTitle: 'Developer'
  }
];

function fetchPersonById(collection, id, reject)  {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          const item = collection.find(item => item.id === id);

          if(item){
            return resolve(JSON.stringify(item))
          }
          return reject()
      }, 1000)
  })
}

function fetchJobById(collection, id, reject)  {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          const item = collection.find(item => item.id === id);

          if(item){
            return resolve(JSON.stringify(item))
          }
          return reject()
      }, 500)
  })
}

Promise.race([fetchPersonById(3), fetchJobById(3)]).then((values) => {
  console.log(values);
});