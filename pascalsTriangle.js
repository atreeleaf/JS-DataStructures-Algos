function countUniqueValues(array){
    let i = 0;
    let j = i+1;
        for (j = i+1;j<array.length;j++){
            if (array[i] != array[j]){
                i = i+1;
                array.splice(i,0,array[j])
            }
        }
        return i + 1
}

let sortedArr = [1,2,3,5,6,6,6,29,29,29,29,30,30,59,60]; // should return 4
// accept a sorted array and count the unique values

console.log(countUniqueValues(sortedArr))