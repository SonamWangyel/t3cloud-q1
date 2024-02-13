const fs = require('fs');
const rl = require('readline-sync');

const balance = Number(fs.readFileSync('./balance.txt', 'utf8'));

const withdrawOrDepositOrCheckBalance = rl.question("Do you want to\n1) Withdraw\n2) Deposit\n3) Check your balance");

if (withdrawOrDepositOrCheckBalance === '1' || withdrawOrDepositOrCheckBalance === '2' || withdrawOrDepositOrCheckBalance === '3') {
    if (withdrawOrDepositOrCheckBalance === '3') {
        console.log("You have " + balance);
        return;
    }

    const change = Number(rl.question("Amount: "));

    if (isNaN(change)) {
        console.log("Sorry, your input was not a number.");
        return;
    }

    if (withdrawOrDepositOrCheckBalance === '1') {
        const newBalance = balance - change;
        if (newBalance < 0) {
            console.log("Insufficient funds, you're poor.");
        } else {
            fs.writeFileSync('balance.txt', "" + newBalance);
            console.log("Thanks for using Tom's Bank, your balance is: " + newBalance);
        }
    } else if (withdrawOrDepositOrCheckBalance === '2') {
        const newBalance = balance + change;
        fs.writeFileSync('balance.txt', "" + newBalance);
        console.log("Thanks for using Tom's Bank, your balance is: " + newBalance);
    }
} else {
    console.log("The option that you have entered is invalid");
}