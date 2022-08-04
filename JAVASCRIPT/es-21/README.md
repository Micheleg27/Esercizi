# Object Copying - Exercise 3

In questo esercizio si desidera creare una copia esatta di `person1` e assegnarla alla variabile `person2`, tuttavia utilizzando il metodo `Object.assign()` e modificando la proprietà `address`, questa viene modificata anche per l'oggetto `person1`. Come posso eseguire un "deep copying" dell'oggetto `person1`?


Con object.assign e provando a cambiare le proprietà, il metodo obj assign funziona bene fin quando le proprietà sono primitive, quando ho proprietà "annidate" ho bisogno di copiare con una deep copying.
