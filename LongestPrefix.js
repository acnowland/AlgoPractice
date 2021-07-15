var longestCommonPrefix = function(strs) {
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
// Big O = On^2 (nested for loop included)

//much better approach after reading
//instead of looping whole array you really just need to compare the first and the last item after sorting


