function intersection(arr1,arr2,arr3){

let elementCount = {}
let result = []

arr1.forEach((el)=>{
  if (!elementCount[el]){
    elementCount[el] = 1;''
  }
})

arr2.forEach((el)=>{
 if (elementCount[el]){
   elementCount[el] = 10
 }
})

arr3.forEach((el)=>{
  if (elementCount[el]){
     elementCount[el] = 50
  }
})

for (num in elementCount){
  if (elementCount[num] === 50){
    result.push((parseInt(num)))
  }
}

return result
}


let arr1 = [0,1,2,5,5];
let arr2 = [2,5,2,4];
let arr3 = [3,5,3,2,1];

console.log(compare(arr1,arr2))
console.log(intersection(arr1,arr2,arr3))
