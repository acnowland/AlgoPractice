var longestCommonPrefix = function(strs) {
    // let sorted = strs.sort()
    let currentPrefix = strs[0]
    let newPrefix = ""
    
    for(var i = 1; i<strs.length;i++){
        let currentWord = strs[i]
        if(currentPrefix[0] !== currentWord[0]){
            return ""
        }else{
            for(var j=0; j<currentWord.length;j++){
                if(currentWord[j] === currentPrefix[j]){
                    newPrefix += currentWord[j]
                }else{
                    break
                }
            }
        }
        currentPrefix = newPrefix
        newPrefix = ""
    }
  return(currentPrefix)     
}


console.log(longestCommonPrefix(["flower","flow","flight"]))



