// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Pseudo code:

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"

// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Pseudo code:
// Input: one number
// Output: a string that will reflect whether or not the given number is below, at, or above the boiling point.
// Process: 
// Create a function called isBoiling that will receive a number
// Determine if that number is above 212 (possible tool: conditionals)
// Determine if that number is below 212 (possible tool: conditionals)
// Determine if that number is at 212 (possible tool: conditionals)

const temperature1 = 42
// Expected output: "42 is below boiling point"

const temperature2 = 350
// Expected output: "350 is above boiling point"

const temperature3 = 212
// Expected output: "212 is at boiling point"

// Function
const isBoiling = (temp) => {

    if (temp > 212) {
        return `${temp} is above boiling point`
    }
    else if (temp < 212) {
        return `${temp} is below boiling point`
    }
    else {
        return `${temp} is at boiling point`
    }

}

console.log(isBoiling(temperature1));
// Output: 42 is below boiling point
console.log(isBoiling(temperature2));
// Output: 350 is above boiling point
console.log(isBoiling(temperature3));
// Output: 212 is at boiling point



// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Pseudo code:
// Input: two arrays
// Output: the length of the combined arrays
// Process:
// Create a new variable totalPadresWorldSeriesRuns
// Combine the two arrays and store with totalPadresWorldSeriesRuns  (possible tool: the accessor .concat)
// Count the number of elements in the new array (possible tool: .length property)

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9

// Code
const totalPadresWorldSeriesRuns = padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns)
console.log(totalPadresWorldSeriesRuns.length);
// Output: 9

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Pseudo code:
// Input: string
// Output: the given string but with the characters reversed
// Process:
// Create a new variable called newArr
// Convert the string to an array  (possible tool: .split() method)
// Store converted string under the new variable
// Reverse the array (possible tool: .reverse() mutator)
// Convert back to a string and store with newArr (possible tool: .join() method)

const currentCohort = "Charlie 2023"
// Expected output: "3202 eilrahC"

// Code:
const newArr = currentCohort.split("")
newArr.reverse()
const revCohort = newArr.join("")
console.log(revCohort);
// Output: 3202 eilrahC


// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Pseudo code:
// Input: number
// Output: the index of the last occurance of the given number
// Process:
// Create a function called lastLocation
// Takes in one number
// Determines the index of the given values last occurance in the array (possible tool: .lastIndexOf accessor)
// Return the index discovered

const numberOfConnections = [13, 34, 42, 5, 5, 10, 27, 42, 10]

const givenValue1 = 42
// Expected output: 7

const givenValue2 = 10
// Expected output: 8

// Function
const lastLocation = (number) => {
    return numberOfConnections.lastIndexOf(number)
}

console.log(lastLocation(givenValue1));
// Output: 7
console.log(lastLocation(givenValue2));
// Output: 8

// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Pseudo code:
// Input: one numerical array
// Output: the given array sorted by largest to smallest
// Process:
// Create a function called sortedArray
// Takes in one array
// Sort the given array (possible tool: .sort() mutator)
// Return the sorted array

const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// Expected output: [82, 80, 79, 77, 76, 73, 72]

const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// Expected output: [68, 67, 66, 66, 62, 59, 59]

// Function
const sortedArray = (array) => {
    array.sort((a, b) => b - a)
    return array
}

console.log(sortedArray(sanDiegoSummerTemperatures));
// Output: [82, 80, 79, 77, 76, 73, 72]
console.log(sortedArray(sanDiegoWinterTemperatures));
// Output: [68, 67, 66, 66, 62, 59, 59]