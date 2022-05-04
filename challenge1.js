
/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    // Collect input string
    // Convert input string to small letter 
    // conditionals if vowels
    // conditional if consonant
    // store in an array
    // convert that array to string
    let smallInput = s.toLowerCase()
    let vowelArray = []
    // Push the vowe Characters to the VowelArray
        for( let i = 0; i < smallInput.length; i++) {
        console.log(smallInput[i])
        if (smallInput[i] === 'a') {
            vowelArray.push(smallInput[i])
        }
        if (smallInput[i] === 'e') {
            vowelArray.push(smallInput[i])
        }
        if (smallInput[i] === 'i') {
            vowelArray.push(smallInput[i])
        }
        if (smallInput[i] === 'o') {
            vowelArray.push(smallInput[i])
        }
        if (smallInput[i] === 'u') {
            vowelArray.push(smallInput[i])
        }
        

    }
    // Push each consonant Character the the Consonant array
    let consonantArray = []
    for (let i = 0 ; i < smallInput.length; i++) {
        if ( smallInput[i] !== 'a' && smallInput[i] !== 'e' && smallInput[i] !== 'i' && smallInput[i] !== 'o' && smallInput[i] !== 'u') {
            consonantArray.push(smallInput[i])
        }
    }
    let answer = vowelArray.concat(consonantArray)
    answer.forEach((letter) => {
        console.log(`\n${letter}`)
    })
}
vowelsAndConsonants("javascriptloops")



