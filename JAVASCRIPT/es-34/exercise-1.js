// Class definition

class Person {
    _firstName = "";
    _lastName = "";


    constructor(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }
}

// Per dichiarare delle proprietà private(accessibili solo dai metodi della classe) bisogna dichiararle all’interno della classe con un _ all’inizio e chiarito da apici vuoti.Nel costruttore creo un’istanza delle classe andando a dare un valore alle proprietà(riportandole sintatticamente con this._[prop]

const developer = new Person('Mario', 'Rossi');
console.log(`${developer._firstName} ${developer._lastName}`);