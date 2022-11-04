function sum(num1, num2, num3) {
  return num1 + num2 + num3;
}

// "..." definisce REST O SPREAD OPERATOR.
// Lo SPREAD OPERATOR in questo caso raccoglie gli elementi definiti nell'array NUMBERS 
// e li estrapola rendendo singolo parametro ogni elemento dell'array come nella dichiarazione della funzione

const numbers = [1, 2, 3];
console.log(sum(...numbers));