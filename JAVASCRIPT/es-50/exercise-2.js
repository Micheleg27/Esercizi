class Person {
  constructor(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  toJson() {
    return JSON.stringify(this);
  }

  fromjj
}

const json = '{"id":1,"firstName":"Mario","lastName":"Rossi","age":25}';
const developer = new Person(JSON.parse(json));
console.log(typeof(developer.toJson()));
console.log(typeof(developer));