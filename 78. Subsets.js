var subsets = function(nums) {
    let result = [[]];

    for (let i = 0 ;i<nums.length;i++){
      result.forEach((array)=>{
        result.push(array.concat(nums[i]))
      })
    }

    return result
};

// console.log(subsets([1,2,3,8,9,23]))

let subSets = [1,2,3];


var recursiveSubSets = function(nums){
  let result = [[]];
  console.log(nums)

  function recurse(){
    if (nums.length === 0){
      return 
    }
    let first = nums.splice(0,1)
    console.log(first)
    result.forEach((el)=>{
      result.push(first.concat(el))
    })
    recurse();
  }

  recurse();
  return result
}

console.log(recursiveSubSets(subSets))