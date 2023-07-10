function isBracketValid(s){
  const stack = [];

  const bracketsMap = {
    ')' : '(',
    '}' : '{',
    ']' : '['
  };

  for(let i = 0; i < s.length; i++){
    const char = s[i];

    if(bracketsMap[char]){
      if(stack.length === 0 || stack.pop() !== bracketsMap[char]){
        return false;
      }
    }else{
      stack.push(char)
    }
  }
    return stack.length === 0;
}

let result = isBracketValid("(")

console.log(result)