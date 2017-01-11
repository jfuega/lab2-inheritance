class BankAccount {

    private theBalance:number;
    private ownerName:string;

    constructor(initialBalance:number, theOwner:string) {

        this.theBalance = initialBalance;
        this.ownerName = theOwner;

    }

    deposit(depositAmount:number) {
        this.theBalance = this.theBalance + depositAmount; 
    }

    withdraw(withdrawAmount:number) {
        
        if(this.theBalance > withdrawAmount) {
            this.theBalance = this.theBalance - withdrawAmount;
        } else {
            console.log("We aren't able to make the withdraw. You currently have $" + this.theBalance + " in your account.");
        }
    }

    checkBalance() {
        console.log('Current balance: ' + this.theBalance);
        console.log('Account owner: ' + this.ownerName);
    }

    
}

let bob10k:BankAccount = new BankAccount(10000,"Bob Loblaw");

bob10k.checkBalance();
bob10k.deposit(5000);
bob10k.checkBalance();
bob10k.withdraw(14000);
bob10k.checkBalance();
bob10k.withdraw(2000);
