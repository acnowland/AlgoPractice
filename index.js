console.log('hello')


function sameFrequency(num1, num2){
    const num1Split = num1.toString().split('')
    const num2Split = num2.toString().split('')
    let freqNum1= {}
    let freqNum2 = {}
    for(var i = 0;i<num1Split.length;i++){
        let currentNum = num1Split[i]
        freqNum1[currentNum] ? freqNum1[currentNum] += 1 : freqNum1[currentNum] = 1
    }
    for(var i = 0;i<num2Split.length;i++){
        let currentNum = num2Split[i]
        freqNum2[currentNum] ? freqNum2[currentNum] += 1 : freqNum2[currentNum] = 1
    }
    return(JSON.stringify(freqNum1) === JSON.stringify(freqNum2))
}

sameFrequency(110,101)