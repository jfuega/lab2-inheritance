class SavingsAccount {

    private theBalance:number;
    private ownerName:string;
    private withdrawAllowed:number = 3;

    constructor(initialBalance:number, theOwner:string) {

        this.theBalance = initialBalance;
        this.ownerName = theOwner;

    }

    deposit(depositAmount:number) {
        this.theBalance = this.theBalance + depositAmount; 
    }

    withdraw(withdrawAmount:number) {
        
        if(this.withdrawAllowed != 0) {
            this.withdrawAllowed--;
            console.log('You have ' + this.withdrawAllowed + ' withdraws left!')
            if(this.theBalance > withdrawAmount) {
                this.theBalance = this.theBalance - withdrawAmount;
            } else {
                console.log("We aren't able to make the withdraw. You currently have $" + this.theBalance + " in your account.");
            }
        } else {
            console.log("You can only withdraw three times from this account!")
        }

    }

    checkBalance() {
        console.log('Current balance: ' + this.theBalance);
        console.log('Account owner: ' + this.ownerName);
    }

    
}

let bob10k:SavingsAccount = new SavingsAccount(10000,"Bob Loblaw");

bob10k.checkBalance();
bob10k.deposit(5000);
bob10k.checkBalance();
bob10k.withdraw(14000); //first
bob10k.checkBalance();
bob10k.withdraw(333);   //second
bob10k.checkBalance();
bob10k.withdraw(333);   //third
bob10k.checkBalance();
bob10k.withdraw(334);   //fourth
bob10k.checkBalance();