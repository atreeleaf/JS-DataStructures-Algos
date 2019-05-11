const arr1 = [1,5,3,2,9,75,34,23,10];

function insertionSort(arr){
    for (let i = 1;i<arr.length;i++){
        let char = arr[i] // selects the element that we will be comparing the previous ones to
        j= i-1 // initializes starting point for the reverse loop. 
        while (arr[j]>char && j>=0){ // sets condition for loop to run
            arr[j+1] = arr[j] // shifts the elements forward one position, if loop condition is true. 
            j-- // decrements the loop 

        }
       arr[j+1] = char // depending on how low the value of J is, this is where the first selected element  will be inserted, as the elements have shifted x times
    }
    return arr // returns the array
}

 
const result = insertionSort(arr1);
console.log(result)