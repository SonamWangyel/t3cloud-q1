var rl = require('readline-sync')
function getNumberfromUser(){
    var reply = rl.question("Give me a number")
    var numberOrNot = Number(reply)
    if (isNaN(numberOrNot)){
        throw "Input must be valid number"
    }else{
        return numberOrNot
    }
}

try {
    var a = getNumberfromUser()
    console.log(a)
    var b = getNumberfromUser()
    console.log(b)
} catch(err){
    console.error(err)
}
