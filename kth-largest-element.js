var findKthLargest = function(nums, k) {
nums.sort();


return nums[nums.length-k]
    
};




let arr = [3,2,3,1,2,4,5,5,6,7,7,8,2,3,1,1,1,10,11,5,6,2,4,7,8,5,6]


console.log(findKthLargest(arr,2))
console.log(findKthLargest(arr,1))