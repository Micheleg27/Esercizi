class BankAccount{
    importo = 0;

    constructor(importo){
        this.importo = importo;
    }

    deposit(number){
        this.importo += number;
        return this.importo;
    }

    withdraw(number){
        this.importo -= number;
        return this.importo;
    }

    view(){
        console.log(this.importo);
    }
}

const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(800);
bankAccount.view();