var minRemoveToMakeValid = function(s) {
    let stack = ["("]
    let splitString = s.split('')

    for(var i =0;i<splitString.length;i++){
        let letter = splitString[i]
        
        if(letter === "("){
            stack.push(i)
        }
        if(letter === ")"){
            if(stack.length > 0){
                stack.pop()
            }
            else{
                splitString.splice(i,1)
                i--
            }
        }
    }
    
    //if extra right facing
    if(stack.length > 0){
        let newString = []
        for(var i = splitString.length -1;i>=0;i--){
            if(stack.length > 0){
                if(splitString[i] === "("){
                    stack.pop()
                }else if(splitString[i] !== "("){
                    newString.push(splitString[i])
                } 
            }else{
                newString.push(splitString[i])
            }
        }
        return newString.reverse().join('')
    }   
    return(splitString.join(''))
};

// need to figure out the second part of how to handle the stack 