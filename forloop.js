var rl = require('readline-sync');
let ans = Number("")
for (var i =0 ; i<5 ; i++){
    var number = Number(rl.question("Enter a number :"))
    if (isNaN(number)){
        console.log("Enter number")
    }
    const choice= rl.question("would you like to \n1)Add \n2)Subtract \n3)Multiply \n4)Divide\n with the previous number you eneterd:  ")
    if (choice ==='1'){
        ans += number
    }else if(choice==='2'){
        ans -= number
    }else if (choice==='3'){
        ans *= number
    }else if (choice==='4'){
        ans /= number
    }else {
        console.log("Select a valid option")
    }
    console.log("Your answer so far is " + ans)
}
