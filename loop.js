// for (var i=0; i <10; i++){
//     console.log(i)
// }

var rl = require("readline-sync");

var shouldLoopRun = true

while (shouldLoopRun){
    var reply = rl.question("Would you like to enter a name of a person?  ")
    if (reply === "yes"){
        n = rl.question("Enter the persons name: ")
        shouldLoopRun 
    }else {
        shouldLoopRun = false
    }
}