// Compare Scopes of the var and let Keywords
function checkScope() {
    // i is within the function's scope
    let i = 'function scope';
    if (true) {
        // but this i is in the if's scope, so we can declare it because it's not the same 'i'
        let i = 'block scope';
        console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
}

// Mutate an Array Declared with const
const s = [5, 7, 2];
function editInPlace() {
    // Only change code below this line

    // Using s = [2, 5, 7] would be invalid
    s[0] = 2;
    s[1] = 5;
    s[2] = 7;

    // Only change code above this line
}

// Prevent Object Mutation
function freezeObj() {
    const MATH_CONSTANTS = {
        PI: 3.14
    };
    // Only change code below this line
    Object.freeze(MATH_CONSTANTS)

    // Only change code above this line
    try {
        MATH_CONSTANTS.PI = 99;
    } catch(ex) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}

// Use Arrow Functions to Write Concise Anonymous Functions
//// Original code (needing to be refactored w/ arrow function notation)
// var magic = function() {
//   return new Date();
// };
const magic = () => new Date();

// Write Arrow Functions with Parameters
//// Original code
// var myConcat = function(arr1, arr2) {
//   return arr1.concat(arr2);
// };

// console.log(myConcat([1, 2], [3, 4, 5]));
const myConcat = ((arr1, arr2) => arr1.concat(arr2));
console.log(myConcat("Good", " Fellas"));;

// Set Default Parameters for Your Functions
//// Original code
    // Only change code below this line
    // const increment = (number, value) => number + value;
    // Only change code above this line
const increment = (number, value = 1) => number + value;

// Use the Rest Parameter with Function Parameters
//// Original code
    // const sum = (x, y, z) => {
    //   const args = [x, y, z];
    //   return args.reduce((a, b) => a + b, 0);
    // }
const sum = (...args) => {
    return args.reduce((a, b) => a + b, 0);
}

// Use the Spread Operator to Evaluate Arrays In-Place
//// Original code
    // const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
    // let arr2;

    // arr2 = [];  // Change this line

    // console.log(arr2);
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  // Change this line

console.log(arr2);
