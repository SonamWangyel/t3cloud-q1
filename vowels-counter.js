function vowelCounter(x) {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    var counter = 0
    var words = x.toLowerCase().split("") 

    for (var i = 0; i < words.length; i++) {
        for (var j = 0; j < vowels.length; j++) {
            if (words[i] === vowels[j]) {
                counter++;
                break
            }
        }
    }
    var count = counter > 0 ? "The word has" + " " + counter + " " + "vowels" : "There are no vowels in the given word"
    return count
    // if (counter > 0) {
    //     return "The word has" + " " + counter + " " + "vowels";
    // } else {
    //     return "There are no vowels in the given word";
    // }
 }

console.log(vowelCounter("Sonam"))
