let numArr = [1,2,3];

function multiplyBy2(num){
  return num * 2
}

function distanceFrom10(num) {
  return Math.abs(num - 10);
}

function map(array,callback){
let result = []
array.forEach((element)=>{
  result.push(callback(element))
})
return result
}


function every(array,callback){
let result = array.reduce((acc,el,index)=>{
  return (acc && callback(el))
},true)

return result
}

function greaterThan5(num) {
  return num > 5;
}

console.log(numArr)
console.log(every(numArr,greaterThan5))


