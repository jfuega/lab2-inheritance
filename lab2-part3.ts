
class Account {

    private theBalance:number;
    private ownerName:string;

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
    
    getBalance() {
        return this.theBalance;
    }

    setBalance(amount:number) {
        this.theBalance = this.theBalance + amount;
    }


}

class CheckingAccount extends Account {

    withdraw(withdrawAmount:number) {
        if(this.getBalance() > withdrawAmount) {
            
            this.setBalance(this.getBalance() - withdrawAmount);
        } else {
            console.log("We aren't able to make the withdraw. You currently have $" + super.getBalance() + " in your account.");
        }
    }
    
}

class SavingsAccount extends Account {

    private withdrawAllowed:number = 3;
    
    withdraw(withdrawAmount:number) {
        
        if(this.withdrawAllowed != 0) {
            this.withdrawAllowed--;
            console.log('You have ' + this.withdrawAllowed + ' withdraws left!');
        if(super.getBalance() > withdrawAmount) {
            super.setBalance(super.getBalance() - withdrawAmount);
            } else {
                console.log("We aren't able to make the withdraw. You currently have $" + super.getBalance() + " in your account.");
            }
        } else {
            console.log("You can only withdraw three times from this account!");
        }

    }

}

//let bob10k:SavingsAccount = new SavingsAccount(10000,"Bob Loblaw");
let greg10k:CheckingAccount = new CheckingAccount(10000,"greg Loblaw");


greg10k.checkBalance();
greg10k.deposit(5000);
greg10k.checkBalance();
greg10k.withdraw(14000); //first withdraw, PASS 1000
greg10k.checkBalance();
// greg10k.withdraw(333);   //second withdraw PASS 667
// greg10k.checkBalance();
// greg10k.withdraw(333);   //third withdraw PASS 334
// greg10k.checkBalance();
// greg10k.withdraw(334);   //fourth withdraw, FAIL 
// greg10k.checkBalance();
