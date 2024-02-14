var sentence = "I am Sonam Wangyel Dorji"
var sentenceIntoWords = sentence.split(" ")
var longestWord = ''
for (var i=0 ; i < sentenceIntoWords.length; i++){
     if (sentenceIntoWords[i].length > longestWord.length){
        longestWord = sentenceIntoWords[i]
        
    } 
}console.log(longestWord)

