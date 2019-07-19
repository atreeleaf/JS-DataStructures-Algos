var subsets = function(nums) {
    let result = [[]];

    for (let i = 0 ;i<nums.length;i++){
      result.forEach((array)=>{
        result.push(array.concat(nums[i]))
      })
    }

    return result
};

console.log(subsets([1,2,3,8,9,23]))