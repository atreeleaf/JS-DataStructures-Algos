function filter_list(list) {
    // Return a new array with the strings filtered out
    //Loop through the array. checking each element. 
    for (let i = 0;i<list.length;i++){
        if (typeof(list[i]) === 'string') 
        {
           list.splice(i,1)
           i--
       }
    }

    return list
    // if typeof element is not equal to number, splice that element out. 
  }

  // i = 0.. list[i] = 1, isNan is true - it's a number. 
const arr1 = [1,2,'a','b'];
// expected output = [1,2];



const num = 1;

const result = filter_list(arr1)

console.log(result)

