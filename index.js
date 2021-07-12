
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

// function isSubsequence(firstString, secondString){
//     let firstStringLocation = 0 
//     for(var i = 0; i<secondString.length;i++){
//         let currentLetter = secondString[i]
//         if(currentLetter == firstString[firstStringLocation]){
//             firstStringLocation++ 
//         }
//     }
//     return(firstStringLocation == firstString.length)

// }

// console.log(isSubsequence('hellp', 'hello world'))]

// function maxSubarraySum(array, subLength){
//     // add whatever parameters you deem necessary - good luck!
//     if(subLength > array.length){
//         return null
//     }
//     let maxSum = 0 
//     for(var i = 0; i<subLength; i++){
//         maxSum += array[i]
//     }
    
//     let tempSum = maxSum
//     for(var j = subLength; j<array.length;j++){
//         tempSum += array[j] - array[j-subLength]
//         console.log(tempSum)
//         if(tempSum > maxSum){
//             maxSum = tempSum
//         }
//     }
//     return maxSum

// }

// console.log(maxSubarraySum([3,-2,7,-4,-1,4,-2,1], 2))

// function minSubarrayLen(array, totalNumber){
//     let minLength = 0 
//     let total = 0 

//     for(var i = 0; total<totalNumber; i++){
//         total += array[i]
//         if(total >= totalNumber){
//             minLength = i + 1
//         }
//     }

//     for(var j = minLength; j<array.length;j++){

//     }


// }
// console.log(minSubarrayLen([2,3,1,2,4,3],6))



///RECURSIVE WORK!!!!///

// function power(num, raisedTo){
//     if(raisedTo == 0) return 1
//     return num * power(num, raisedTo -1)
// }
// console.log(power(2,0)) // 1)
// console.log(power(2,2)) // 4
// console.log(power(2,4)) // 16

// function factorial(num){
//    if(num < 1) return 1
//    return num * factorial(num-1)
// }
// console.log(factorial(2)) // 2
// console.log(factorial(4)) // 24
// console.log(factorial(7)) // 5040

// function productOfArray(numArray){
//     if(numArray.length == 0) return 1
//     return numArray[0] * productOfArray(numArray.slice(1))
// }
// console.log(productOfArray([1,2,3])) // 6
// console.log(productOfArray([1,2,3,10])) // 60


// function recursiveRange(num){ 
//     if(num === 0) return 0
//     return num + recursiveRange(num -1)
// }
// console.log(recursiveRange(6)) // 21
// recursiveRange(10) // 55 c



// function fib(n){
//     if (n <= 2) return 1;
//     return fib(n-1) + fib(n-2);
// }

// console.log(fib(4)) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465