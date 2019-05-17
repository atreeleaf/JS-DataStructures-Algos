function checkPangram(stringsArray) {
    let trimmedStringsArray = stringsArray.map((str=>{ // creates an array of strings with no spaces.
        return str.replace(/\s+/g, '')
    }))
    let resultArray = [];
    trimmedStringsArray.forEach((string)=>{
        (isPangram(string)) ? resultArray.push('1') : resultArray.push('0')
    })
    resultArray = resultArray.join('');
    return resultArray
 
}


function isPangram(eachString){
    eachString = eachString.toLowerCase()
    let alphabet_Object_Count = {}
    for (var i = 65;i<=90;i++){
        alphabet_Object_Count[String.fromCharCode(i).toLowerCase()] = 0 // initializes alphabet object
    } 
    for (char of eachString){
        alphabet_Object_Count[char] ++ 
    }
    let alphabetCount = Object.values(alphabet_Object_Count)
    for (var i = 0;i<alphabetCount.length;i++){
        if (alphabetCount[i]<1){
            return 0
        } 
    }
    return 1
}

console.log(checkPangram(['We promptly judged antique ivory buckles for the next prize','is this a pangram?','Sixty zippers were quickly picked from the woven jute bag']))



// Create a function that 