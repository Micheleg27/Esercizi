function calculate() {
    let appogg = 0;

    return operations = {
        add(number) {
            appogg = appogg + number;
            return this;
        },
        multiply(number) {
            appogg = appogg * number;
            return this;
        },
        sub(number) {
            appogg = appogg - number;
            return this;
        },
        divide(number) {
            appogg = appogg / number;
            return this
        },
        printResult() {
            console.log(appogg);
        }
    }
}

const calculator = calculate();
calculator.add(2).add(4).multiply(3).sub(1).sub(3).divide(2).printResult(); // Il risultato sarà: 7