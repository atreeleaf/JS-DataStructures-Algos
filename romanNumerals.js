let romanNumeralObject ={
    1:'I',
    5:'V',
    10:'X',
    50:'L',
    100:'C',
    500:'D',
    1000:'M'
}


function solution(number){
    // decompose the number .. ex... [400,20,3]

    let result = stringify_into_Array(number) 
    let length = result.length // syntax simplification
    let multiplyBy = 10 ** (length - 1)

    let digitizedArray = result.map((digit,index)=>{
    if (index >0){
    multiplyBy = multiplyBy/10 // decrementing every iteration by a factor of 10. 
    }
    return digit * multiplyBy

    })

    // return digitizedArray
    result = digitizedArray.map((digit)=>{
        return convertToRoman(digit)
    })
    return result.join('')
  }


  


function stringify_into_Array(num){
    let result = []
    num = num.toString()
    for (char of num){
    result.push(parseInt(char))
    }
    return result
}


function convertToRoman(number){
let romanNumeralArray = []
number = stringify_into_Array(number)
let length = number.length
let addZeros = 10 ** (length - 1)
let firstDigit = number[0];
if (firstDigit === 4 || firstDigit === 9){
    romanNumeralArray.push(romanNumeralObject[1*addZeros])
    romanNumeralArray.push(romanNumeralObject[(addZeros)* (firstDigit+1)])
} else if (firstDigit === 2 || firstDigit ===3){
    romanNumeralArray.push(romanNumeralObject[addZeros].repeat(firstDigit))
} else if (firstDigit>=5){
    romanNumeralArray.push(romanNumeralObject[5 * addZeros])
    romanNumeralArray.push(romanNumeralObject[1*addZeros].repeat(firstDigit-5))
}else {
    romanNumeralArray.push(romanNumeralObject[firstDigit * addZeros])
}
    

return romanNumeralArray.join('')

}


console.log(solution(394))
// console.log(solution(9000))