// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer: 
// b) Verify and explain:

// --------------------1) What will this log?

const cohort = "LEARN 2023"
console.log(cohort.length)

// a) Your answer:
    // const = is a variable
    // cohort = identifies the variable reference
    // "" = A string that the computer reads when the variable cohort is called
    // .length will return a numerical value of the number of characters contained within the cohort string
    //  The expected output: 10

// b) Verify and explain: 
    // Output: 10
    // When logging the .length property on a string, it will display the number of characters within the provided string.

// --------------------2) What will this log?

const greeting = "Hello World!"
console.log(greeting[4])

// a) Your answer:
    // const is a variable
    // greeting is the name of the const variable
    // "" assigns the datatype of a string to the greetin variable
    // greeting[4] instructs the computer to produce the character located the index of 4
    // Expected Output: "o"

// b) Verify and explain: 
    // Output: "o"
    // When logging greeting[4], the console looks at the 4th index of the string and shows the character that is stored there.

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])

// a) Your answer:
    // const is a variable
    // languages/index are the variable references
    // [] identifies that language will be an array variable
    // index has been assigned the datatype of a number when given 1
    // by placing index within the [] of language, the computer reads the numerical value of index and locates the element stored at that matching index number
    // Expected output: "Ruby"

// b) Verify and explain: 
    // Output: Ruby
    // By passing the variable 'index' in to the [] of languages, we are logging the value stored at the value provided by the variable 'index' within the languages array.

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: 
    // const establishes a variable
    // weekendDays is the variable reference
    // [] assigns the datatype of an array to the variable weekendDays
    // .toUpperCase() is a method to translate a string from lower case to upper case
    // as .toUpperCase() is being attempted on an array and not a string, the computer will not be able to properly produce a result
    // Expected output: undefined

// b) Verify and explain:
    // Output: weekendDays.toUpperCase() is not a function
    // The .toUpperCase() is a method that operates on a string datatype. 'weekendDays' is an array datatype. Therefore, we are presented with the error message "not a function".

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
console.log(typeof dataTypes.length)

// a) Your answer: 
    // const is a variable
    // dataTypes is the variable reference
    // [] assigns the datatype of an array to the dataTypes variable
    // typeof is an action being conducted on dataType
    // .length is a method that returns the number of elements in the array of dataTypes
    // typeof is missing () or a '.', therefore the computer will not be able to properly read the given line of code
    // Expected output: Syntax Error

// b) Verify and explain: 
    // Output: "number"
    // 'typeof' is an operator the determines the datatype of given variable. '.length' returns a numerical value of the length of given array. When logging 'typeof dataTypes.length', the '.length' returns a numerical value, and the 'typeof' operator determines that the datatype returned by 'length' is a number datatype.
