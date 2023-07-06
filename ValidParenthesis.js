function isValid(s) {
    const stack = []; // Use a stack to keep track of opening brackets
  
    // Mapping of closing brackets to their corresponding opening brackets
    const bracketsMap = {
      ')': '(',
      '}': '{',
      ']': '['
    };
  
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
  
      if (bracketsMap[char]) {
        // If the character is a closing bracket
        if (stack.length === 0 || stack.pop() !== bracketsMap[char]) {
          return false; // Invalid if stack is empty or top of stack doesn't match
        }
      } else {
        // If the character is an opening bracket, push it onto the stack
        stack.push(char);
      }
    }
  
    return stack.length === 0; // Valid if the stack is empty at the end
  }

  let result = isValid("(({()}))")

  console.log(result)
  
