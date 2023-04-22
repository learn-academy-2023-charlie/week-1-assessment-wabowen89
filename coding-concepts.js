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

// a) Your answer: 10
// b) Verify and explain: 10; When logging the .length property on a string, it will display the number of characters within the provided string.

// --------------------2) What will this log?

const greeting = "Hello World!"
console.log(greeting[4])

// a) Your answer: "o"
// b) Verify and explain: "o"; When logging greeting[4], the console looks at the 4th index of the string and shows the character that is stored there.

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])

// a) Your answer: Ruby
// b) Verify and explain: Ruby; By passing the variable 'index' in to the [] of languages, we are logging the value stored at the value provided by the variable 'index' within the languages array.

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: undefined
// b) Verify and explain: weekendDays.toUpperCase() is not a function; The .toUpperCase() is a method that operates on a string datatype. 'weekendDays' is an array datatype. Therefore, we are presented with the error message "not a function".

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
console.log(typeof dataTypes.length)

// a) Your answer: Syntax Error
// b) Verify and explain: "number"; 'typeof' is an operator the determines the datatype of given variable. '.length' returns a numerical value of the length of given array. When logging 'typeof dataTypes.length', the '.length' returns a numerical value, and the 'typeof' operator determines that the datatype returned by 'length' is a number datatype.
