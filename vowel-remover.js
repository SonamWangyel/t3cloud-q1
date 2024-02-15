function removeVowels(x){
    const vowels = ['a', 'e', 'i', 'o', 'u']
    var result = []
    var words = x.toLowerCase().split("")
    for (var i = 0; i<words.length; i++){
        if (!vowels.includes(words[i])){
            result.push(words[i])
            
        }
    } 
    return result.join("")
}

console.log(removeVowels("Sonam"))