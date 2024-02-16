    /*
        Split Binary Chunks

        For a given string of binary, return an array of strings where each string length is equal to the passed chunk size.

        Input:
        - "11010111011101110001101010110100"
        - 4

        Output:
        ["1101", "0111", "0111", "0111", "0001", "1010", "1011", "0100"]

        If the string is not divisible by the chunk integer, simply chunk the remainder together.

        Input:
        - "10101010"
        - 6
        
        Output:
        ["101010", "10"]

    */

function splitBinaryChunks(binaryString, chunkSize) {
    binary=""+ binaryString
        var myarray=[]
        for (var i=0; i<binary.length; i+=chunkSize){
                myarray.push(binary.slice(i,i+chunkSize))
        }
        return myarray
}


console.log(splitBinaryChunks("11010111011101110001101010110100",4))
console.log(splitBinaryChunks("10101010",6))





