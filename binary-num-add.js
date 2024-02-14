function addBinary(binA, binB) {
    var result = []
    for (var i = binA.length - 1; i>=0; i--){
        var sum = binA[i] + binB[i]
        result[i] = sum 
        // Handle carry 
    } for (var i = binA.length - 1; i>= 0; i--){
        if (result[i] === 2) {
            result[i] = 0;
            if (i - 1 >= 0) {
              result[i - 1]++;
            } else {
              result.unshift(1);
            }
          }
        }
       
        
    console.log(result)
}
const a = [1, 0, 1, 1, 0, 1]
const b = [0, 1, 1, 0, 0, 0]

addBinary(a,b)

// addBinary(a, b) === [1, 0, 0, 0, 1, 0, 1] 