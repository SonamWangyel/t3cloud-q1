/*
	Get Middle Characters

	For a given string, return the middlemost character (or characters if the string has an even length).

	Input:
	- "hello"

	Output:
	"l"

	Input:
	- "Kuzu za ngpo"

	Output:
	"za"

*/

function getMiddleCharacters(someString) {
    const length = someString.length
    const middleIndex = length / 2
	var result = ""

    if (length % 2 === 0) {
        for (var i = middleIndex-1 ; i <= middleIndex; i++) {
            result += someString[i];
        }
        return result;
    } else if (length%2 != 0) {
        for (var i = 0; i < middleIndex ; i++) {
            result = someString[i];
        }
        return result;
    }
}

console.log(getMiddleCharacters("hello"))
console.log(getMiddleCharacters("Kuzuzangpo"))