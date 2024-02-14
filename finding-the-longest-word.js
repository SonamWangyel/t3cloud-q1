function maxLengthOfWords(words){
    var sentenceIntoWords = words.split(" ")
    var longestWord = ''
    for (var i=0 ; i < sentenceIntoWords.length; i++){
         if (sentenceIntoWords[i].length > longestWord.length){
            longestWord = sentenceIntoWords[i]
        } 
    }return longestWord
     
}
console.log(maxLengthOfWords("Hi I Am Sonam Wangyel Dorji"))