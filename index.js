
// function sameFrequency(num1, num2){
//     const num1Split = num1.toString().split('')
//     const num2Split = num2.toString().split('')
//     let freqNum1= {}
//     let freqNum2 = {}
//     for(var i = 0;i<num1Split.length;i++){
//         let currentNum = num1Split[i]
//         freqNum1[currentNum] ? freqNum1[currentNum] += 1 : freqNum1[currentNum] = 1
//     }
//     for(var i = 0;i<num2Split.length;i++){
//         let currentNum = num2Split[i]
//         freqNum2[currentNum] ? freqNum2[currentNum] += 1 : freqNum2[currentNum] = 1
//     }
//     return(JSON.stringify(freqNum1) === JSON.stringify(freqNum2))
// }
// sameFrequency(110,101)

// function areThereDuplicates(...variables){
//     let duplicateCheck = {}
//     for(var i = 0 ; i<variables.length;i++){
//         let currentItem = variables[i]
//         if(duplicateCheck[currentItem]){
//             return true
//         }else{
//             duplicateCheck[currentItem] = 1
//         }
//     }
//     return false
// }

// areThereDuplicates(1,2,3,4,5)

// function averagePair(numberArray, average){
//     let start = 0 
//     let end = numberArray.length - 1
//     while(start < end){
//         let currentAverage = (numberArray[start] + numberArray[end]) / 2
//         if(currentAverage === average){
//             console.log(true)
//             return
//         }else if(currentAverage > average){
//             end--
//         }else{
//             start++
//         }
//     }
//     console.log(false)
//     return false
// }

// averagePair([1,3,5], 2.5)

function isSubsequence(firstString, secondString){
    let firstStringLocation = 0 
    for(var i = 0; i<secondString.length;i++){
        let currentLetter = secondString[i]
        if(currentLetter == firstString[firstStringLocation]){
            firstStringLocation++ 
        }
    }
    return(firstStringLocation == firstString.length)

}

console.log(isSubsequence('hellp', 'hello world'))