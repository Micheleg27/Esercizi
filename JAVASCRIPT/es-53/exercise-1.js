function sum(...theArgs) {

    return theArgs.reduce((sum, value) => sum += value);
}

console.log(sum(1, 2, 3, 4, 5));