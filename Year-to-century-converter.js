var rl = require("readline-sync")
x = rl.question("Insert a year")
function yearToCenturyConverter(x){
    var year = Number(x);
    var century = ""
    if (year % 100 === 0 ){
        century = year / 100 
        if (century = 1 ){
            century = century + "century"
        }
    } else {
        century = Math.floor(year/100) + 1 + "century"
    }
    return century;
}
console.log(yearToCenturyConverter(x))
// Best solution 
// function getFromYear(year) {
// 	const century = Math.ceil(year / 100)
// 	var suffix = "th"
// 	if (century % 100 >= 10 && century % 100 <= 20) {
// 		suffix = "th"
// 	} else if (century % 10 === 1) {
// 		suffix = "st"
// 	} else if (century % 10 === 2) {
// 		suffix = "nd"
// 	} else if (century % 10 === 3) {
// 		suffix = "rd"
// 	}

// 	return century + suffix + " century"
// }

// console.log(getFromYear(1616)) // 17th