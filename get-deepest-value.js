/*
	Get Deepest Value.

	For any given object, return the deepest value in that object:

	Input:
		{
			a: 1,
			b: {
				c: 2
			},
			d: 3,
			e: {
				f: {
					g: 4
				}
			}
		}

	Output:
	4

	In the above example, the correct answer is 4, because it is nested 3 levels deep.
	e.f.g

	If there are more than one possible deepest value, return either.

*/

function getDeepestValue(obj) {
    var keepTrack = []
    var capture = Object.values(obj)
    var canGoDeeper = []
    
    for (var i = 0; i < capture.length; i++) {
        if (typeof capture[i] === 'object') {
            canGoDeeper.push(capture[i])
        }
    } 
    
    if (canGoDeeper.length === 0) {
        return capture[0]
    } else {
        for (var j = 0; j < canGoDeeper.length; j++) {
            keepTrack.push(getDeepestValue(canGoDeeper[j]))
        }
        return keepTrack[keepTrack.length - 1]
    }
}

const data={
        a: 1,
        b: {
            c: 2,
            d: {
                e: 3
            }
        }
    };

    
    // a: 1,
        // b: {
        //     c: 2
        // },
        // d: 3,
        // e: {
        //     f: {
        //         g: {
        //             h : 5,
        //             }
        //         }
        //     } 
        // }
    
    console.log(getDeepestValue(data))


  
    //     var keepTrack = []
//     var capture = Object.values(obj)
//     var canGoDeeper = []
//     for (var i =0 ; i<capture.length; i++){
//         if( typeof capture[i] === 'object'){
//             canGoDeeper.push(capture[i])
//         }
//     } 
//     if(canGoDeeper.length === 0){
//         return capture[0]
//     }else{
//         for (var j = 0; j<canGoDeeper.length; i++){
//             getDeepestValue(keepTrack)
//         }
//     }

    
// }