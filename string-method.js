// var result = "Tom is at his computer.".split("")
// const restrictedWords = ["banana", "orange", "apple", "peach", "grape"]

// function checkUsername(username) {
// 	var isUserNameOk = true

// 	for (var i = 0; i < restrictedWords.length; i += 1) {
// 		var includesRestrictedWord = username.includes(restrictedWords[i])
// 		if (includesRestrictedWord) {
// 			isUserNameOk = false
// 		}
// 	}

// 	return isUserNameOk
// }

// console.log(checkUsername("mike45")) // true
// console.log(checkUsername("apple45")) // false

var result = "john james jones"
// Another alternative solution : var capitalized = result.replace(/(^|\s)[a-z]/g, (x => x.toLocalUpperCase()))
// console.log(capitalized)
var splitIntoWords = result.split(" ")

for (var i = 0; i<splitIntoWords.length; i ++){
    var currentWord = splitIntoWords[i]
	var lettersOfCurrentWord = currentWord.split("")
	var capitalizedLetter = lettersOfCurrentWord[0].toLocaleUpperCase()
	lettersOfCurrentWord[0] = capitalizedLetter
	var capitalizedWord = lettersOfCurrentWord.join("")
	splitIntoWords[i] = capitalizedWord
}
const capitalizedName = splitIntoWords.join(" ")
console.log(capitalizedName)
   



// Alternative solution === result[i] = result[i].charAt(0).toUpperCase() + result[i].slice(1);
