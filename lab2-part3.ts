
class Account {

     theBalance:number; //make private?
     ownerName:string;  //make private?

    constructor(initialBalance:number, theOwner:string) {

        this.theBalance = initialBalance;
        this.ownerName = theOwner;

    }

    deposit(depositAmount:number) {
        this.theBalance = this.theBalance + depositAmount; 
    }


    checkBalance() {
        console.log('Current balance: ' + this.theBalance);
        console.log('Account owner: ' + this.ownerName);
    }
    
    // getBalance() {
    //     return this.theBalance;
    // }

    // setBalance(amount:number) {
    //     this.theBalance = this.theBalance + amount;
    // }
    
    withdraw(withdrawAmount:number) {
        if(this.theBalance > withdrawAmount) {
            this.theBalance = this.theBalance - withdrawAmount;
        } else {
            console.log("We aren't able to make the withdraw. You currently have $" + this.theBalance + " in your account.");
        }
    }

}

class CheckingAccount extends Account {

    constructor(initialBalance:number, owner:string) {
        super(initialBalance, owner);
    }
  
}

class SavingsAccount extends Account {
    
    /*
    constructor(initialBalance:number, owner:string) { //do subclasses need constructors? It works with and without
        super(initialBalance, owner);
    }
    */

    private withdrawAllowed:number = 3;
    
    withdraw(withdrawAmount:number) {
        
        if(this.withdrawAllowed != 0) {
            this.withdrawAllowed--;
            console.log('You have ' + this.withdrawAllowed + ' withdraws left!');
        if(this.theBalance > withdrawAmount) {
            this.theBalance = this.theBalance - withdrawAmount;
            } else {
                console.log("We aren't able to make the withdraw. You currently have $" + this.theBalance + " in your account.");
            }
        } else {
            console.log("You can only withdraw three times from this account!");
        }

    }

}

let bob10k:SavingsAccount = new SavingsAccount(10000,"Bob Loblaw");
// let greg10k:CheckingAccount = new CheckingAccount(10000,"Greg Loblaw");


bob10k.checkBalance();
bob10k.deposit(5000);
bob10k.checkBalance();
bob10k.withdraw(14001); //first withdraw, EXPECTED 999
bob10k.checkBalance();
bob10k.withdraw(333);   //second withdraw PASS 667
bob10k.checkBalance();
bob10k.withdraw(333);   //third withdraw PASS 334
bob10k.checkBalance();
bob10k.withdraw(334);   //fourth withdraw, FAIL 
bob10k.checkBalance();
