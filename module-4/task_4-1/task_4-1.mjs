"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const AccountType = {
    Normal: "Brukskonto",
    Saving: "Sparekonto",
    Credit: "Kreditkonto",
    Pension: "Pensionskonto"
};


const allTypes = Object.values(AccountType).join(", ");
printOut(allTypes);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
class TAccount {
    #type; 

    constructor(aType) {
        this.#type = aType;
    }

    
    setType(newType) {
        printOut(`Account is changed from ${this.#type} to ${newType}`);
        this.#type = newType;
    }

    
    toString() {
        return this.#type;
    }
}


const myAccount = new TAccount("Normal");


printOut(`myAccount = ${myAccount.toString()}`);


myAccount.setType("Saving");


printOut(`myAccount = ${myAccount.toString()}`);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
class BankAccount {
    #type;
    #balance;

    constructor(aType, initialBalance = 0) {
        this.#type = aType;
        this.#balance = initialBalance;
    }


    setType(aType) {
        printOut(`Account type changed from ${this.#type} to ${aType}`);
        this.#type = aType;
    }

    
    toString() {
        return `Type: ${this.#type}, Balance: ${this.#balance.toFixed(2)} NOK`;
    }

    getBalance() {
        return this.#balance;
    }

  
    deposit(aAmount) {
        if (aAmount > 0) {
            this.#balance += aAmount;
            printOut(`Deposit of ${aAmount.toFixed(2)}, new balance is ${this.#balance.toFixed(2)}`);
        } else {
            printOut("Deposit amount must be positive");
        }
    }

 
    withdraw(aAmount) {
        if (aAmount <= 0) {
            printOut("Withdrawal amount must be positive");
        } else if (aAmount > this.#balance) {
            printOut("Insufficient funds for withdrawal");
        } else {
            this.#balance -= aAmount;
            printOut(`Withdrawal of ${aAmount.toFixed(2)}, new balance is ${this.#balance.toFixed(2)}`);
        }
    }
}


const myAccount2 = new BankAccount("Normal");
myAccount2.deposit(100);
myAccount2.withdraw(25);
printOut(`My account balance is ${myAccount2.getBalance().toFixed(2)}`);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
class TAccountLimited {
    #type;
    #balance;
    #withdrawCount;

    constructor(aType, initialBalance = 0) {
        this.#type = aType;
        this.#balance = initialBalance;
        this.#withdrawCount = 0;
    }

    setType(aType) {
        printOut(`Account is changed from ${this.#type} to ${aType}`);
        this.#type = aType;
        this.#withdrawCount = 0;
    }

    deposit(aAmount) {
        if (aAmount > 0) {
            this.#balance += aAmount;
            this.#withdrawCount = 0;
            printOut(`Deposit of ${aAmount}, new balance is ${this.#balance}`);
        } else {
            printOut("Deposit amount must be positive");
        }
    }

    withdraw(aAmount) {
        switch (this.#type) {
            case "Pensionskonto":
                printOut("You can't withdraw from a Pensionskonto!");
                return;
            case "Sparekonto":
                if (this.#withdrawCount >= 3) {
                    printOut("You can't Withdraw from a Sparekonto more than three times!");
                    return;
                }
                break;
        }

        if (aAmount <= 0) {
            printOut("Withdrawal amount must be positive");
        } else if (aAmount > this.#balance) {
            printOut("Insufficient funds for withdrawal");
        } else {
            this.#balance -= aAmount;
            this.#withdrawCount++;
            printOut(`Withdrawal of ${aAmount}, new balance is ${this.#balance}`);
        }
    }

    getBalance() {
        return this.#balance;
    }
}


const myAccount4 = new TAccountLimited("Normal");
myAccount4.deposit(25);              
myAccount4.deposit(75);              
myAccount4.setType("Sparekonto");    

myAccount4.withdraw(30);             
myAccount4.withdraw(30);             
myAccount4.withdraw(30);             
myAccount4.withdraw(30);            
myAccount4.setType("Pensionskonto"); 
myAccount4.withdraw(10);             

myAccount4.setType("Sparekonto");    
myAccount4.withdraw(10);             

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
// Use the imported printOut; do not redefine it here.

class TAccountWithCurrency {
    #type;
    #balance;
    #withdrawCount;
    #currencyType;

    constructor(aType, initialBalance = 0) {
        this.#type = aType;
        this.#balance = initialBalance;
        this.#withdrawCount = 0;
        this.#currencyType = "NOK";
    }

    deposit(aAmount) {
        if (aAmount > 0) {
            this.#balance += aAmount;
            this.#withdrawCount = 0;
            printOut(`Deposit of ${aAmount}${this.#currencyType}; new balance is ${this.#balance}${this.#currencyType}`);
        } else {
            printOut("Deposit amount must be positive");
        }
    }
}


const myAccountCurrency = new TAccountWithCurrency("Normal");
myAccountCurrency.deposit(150);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const CurrencyTypes = {
    NOK: { value: 1.0000, name: "Norske kroner", denomination: "kr" },
    SEK: { value: 1.0580, name: "Svenske kroner", denomination: "kr" },
    USD: { value: 0.1091, name: "United States dollar", denomination: "$" }
};



class TAccountCurrency {
    #type;
    #balance;
    #withdrawCount;
    #currencyType;

    constructor(aType, initialBalance = 0) {
        this.#type = aType;
        this.#balance = initialBalance;
        this.#withdrawCount = 0;
        this.#currencyType = "NOK";
    }

    #currencyConvert(newCurrencyType) {
        const currentRate = CurrencyTypes[this.#currencyType].value;
        const newRate = CurrencyTypes[newCurrencyType].value;
        return (this.#balance * newRate) / currentRate;
    }

    setCurrencyType(newCurrencyType) {
        if (newCurrencyType === this.#currencyType) return;

        const oldCurrency = this.#currencyType;
        this.#balance = this.#currencyConvert(newCurrencyType);
        this.#currencyType = newCurrencyType;

        const symbol = CurrencyTypes[newCurrencyType].denomination;
        printOut(`The account currency has changed from ${CurrencyTypes[oldCurrency].name} to ${CurrencyTypes[newCurrencyType].name}`);
        printOut(`New balance is ${this.#balance.toFixed(2)}${symbol}`);
    }

    deposit(aAmount) {
        if (aAmount > 0) {
            this.#balance += aAmount;
            this.#withdrawCount = 0;
        }
    }
}
const myAccountCurrency2 = new TAccountCurrency("Normal");
myAccountCurrency2.deposit(1000);
myAccountCurrency2.setCurrencyType("USD");
myAccountCurrency2.setCurrencyType("SEK");
myAccountCurrency2.setCurrencyType("NOK");

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
// Merge additional currencies into the already defined CurrencyTypes (do not redeclare CurrencyTypes)
const CurrencyTypesExtended = {
    ...CurrencyTypes,
    GBP: { value: 0.0847, name: "Pound sterling", denomination: "£" },
    CAD: { value: 0.1435, name: "Canadiske dollar", denomination: "C$" },
    INR: { value: 7.8309, name: "Indiske rupee", denomination: "₹" }
};

class TAccountFull {
    #type;
    #balance;
    #withdrawCount;
    #currencyType;

    constructor(aType, initialBalance = 0) {
        this.#type = aType;
        this.#balance = initialBalance;
        this.#withdrawCount = 0;
        this.#currencyType = "NOK";
    }

    #currencyConvert(newCurrencyType) {
        const currentRate = CurrencyTypesExtended[this.#currencyType].value;
        const newRate = CurrencyTypesExtended[newCurrencyType].value;
        return (this.#balance * newRate) / currentRate;
    }

    setCurrencyType(newCurrencyType) {
        if (newCurrencyType === this.#currencyType) return;

        const oldCurrency = this.#currencyType;
        this.#balance = this.#currencyConvert(newCurrencyType);
        this.#currencyType = newCurrencyType;

        const symbol = CurrencyTypesExtended[newCurrencyType].denomination;
        printOut(`The account currency has changed from ${CurrencyTypesExtended[oldCurrency].name} to ${CurrencyTypesExtended[newCurrencyType].name}`);
        printOut(`New balance is ${this.#balance.toFixed(2)}${symbol}`);
    }

    deposit(aAmount, aType = "NOK") {
        if (aAmount > 0) {
            const depositCurrency = CurrencyTypesExtended[aType] ? aType : "NOK";
            const convertedAmount = (aAmount * CurrencyTypesExtended[this.#currencyType].value) / CurrencyTypesExtended[depositCurrency].value;
            this.#balance += convertedAmount;
            this.#withdrawCount = 0;

            const accountSymbol = CurrencyTypesExtended[this.#currencyType].denomination;
            printOut(`Deposit of ${aAmount.toFixed(2)} ${CurrencyTypesExtended[depositCurrency].name}, new balance is ${this.#balance.toFixed(2)}${accountSymbol}`);
        }
    }

    withdraw(aAmount, aType = "NOK") {
        const withdrawCurrency = CurrencyTypesExtended[aType] ? aType : "NOK";
        const convertedAmount = (aAmount * CurrencyTypesExtended[this.#currencyType].value) / CurrencyTypesExtended[withdrawCurrency].value;

        if (convertedAmount > this.#balance) {
            printOut("Insufficient funds for withdrawal");
            return;
        }

        this.#balance -= convertedAmount;

        const accountSymbol = CurrencyTypesExtended[this.#currencyType].denomination;
        printOut(`Withdrawal of ${aAmount.toFixed(2)} ${CurrencyTypesExtended[withdrawCurrency].name}, new balance is ${this.#balance.toFixed(2)}${accountSymbol}`);
    }

    getBalance() {
        return this.#balance.toFixed(2);
    }

    // Public getter for the private currency field so external code cannot access #currencyType directly
    getCurrencyType() {
        return this.#currencyType;
    }
}

const myAccountFull = new TAccountFull("Normal");
myAccountFull.deposit(1000, "NOK");
myAccountFull.setCurrencyType("USD");
myAccountFull.deposit(100, "EUR"); // EUR not defined, should default to NOK
myAccountFull.deposit(100, "GBP");
myAccountFull.withdraw(50, "CAD");
myAccountFull.setCurrencyType("INR");
printOut(`Final balance is ${myAccountFull.getBalance()} ${CurrencyTypesExtended[myAccountFull.getCurrencyType()].denomination}`);