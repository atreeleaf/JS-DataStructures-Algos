
let arr1 = [1,3,5,9];
let arr2 = [9,1,25,81];

function arrayCheck(firstArray,secondArray){
const obj1 = {};
const obj2 = {};
for (let val of firstArray){
obj1[val] = obj1[val] + 1 || 1 // sets the value of the key (array value) to 1, or increments it.
}

for (let val of secondArray){
obj2[val] = obj2[val] + 1 || 1
}
console.log(obj1,obj2)
for (let key in obj1){ // For every key, it checks to see if the key squared exists in Obj2. 
	if (!(key ** 2 in obj2)){
  return false
  }
    if ((obj1[key]) !== obj2[key**2]){
        return false
    }           // checks the value of the key to see if its squared in obj2. 
}
return true

}

const answer = arrayCheck(arr1,arr2)

console.log(answer)