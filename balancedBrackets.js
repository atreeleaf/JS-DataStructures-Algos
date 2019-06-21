function isBalanced(string){
    let stack = [];
    let map = {
        '(': ')',
        '[': ']',
        '{': '}'
    }

    for (let char of string){
        if (char in map){
            stack.push(char)
        }

        if (char === ')' || char === '}' || char === ']'){
            if (!stack.includes(getKeyByValue(map,char))){
                return false
            }
         stack.pop();
        }
    }


    return stack.length === 0
}

function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
  }
// visualization 
// [[,[,[,]


console.log(isBalanced('({})'))