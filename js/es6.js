// =================================================== Problem 1 =======================================================

// Compare Scopes of the var and let Keywords
// function checkScope() {
//     // i is within the function's scope
//     let i = 'function scope';
//     if (true) {
//         // but this i is in the if's scope, so we can declare it because it's not the same 'i'
//         let i = 'block scope';
//         console.log('Block scope i is: ', i);
//     }
//     console.log('Function scope i is: ', i);
//     return i;
// }

// =================================================== Problem 2 =======================================================

// Mutate an Array Declared with const
// const s = [5, 7, 2];
// function editInPlace() {
//     // Only change code below this line
//
//     // Using s = [2, 5, 7] would be invalid
//     // s[0] = 2;
//     // s[1] = 5;
//     // s[2] = 7;
//
//     // Only change code above this line
// }

// =================================================== Problem 3 =======================================================

// Prevent Object Mutation
// function freezeObj() {
//     const MATH_CONSTANTS = {
//         PI: 3.14
//     };
//     // Only change code below this line
//     Object.freeze(MATH_CONSTANTS)
//
//     // Only change code above this line
//     try {
//         MATH_CONSTANTS.PI = 99;
//     } catch(ex) {
//         console.log(ex);
//     }
//     return MATH_CONSTANTS.PI;
// }

// =================================================== Problem 4 =======================================================

// Use Arrow Functions to Write Concise Anonymous Functions
//// Original code (needing to be refactored w/ arrow function notation)
// var magic = function() {
//   return new Date();
// };
// const magic = () => new Date();

// =================================================== Problem 5 =======================================================

// Write Arrow Functions with Parameters
//// Original code
// var myConcat = function(arr1, arr2) {
//   return arr1.concat(arr2);
// };


// // console.log(myConcat([1, 2], [3, 4, 5]));
// const myConcat = ((arr1, arr2) => arr1.concat(arr2));
// console.log(myConcat("Good", " Fellas"));;

// =================================================== Problem 6 =======================================================

// Set Default Parameters for Your Functions
//// Original code
    // Only change code below this line
    // const increment = (number, value) => number + value;
    // Only change code above this line
// const increment = (number, value = 1) => number + value;

// =================================================== Problem 7 =======================================================

// Use the Rest Parameter with Function Parameters
//// Original code
    // const sum = (x, y, z) => {
    //   const args = [x, y, z];
    //   return args.reduce((a, b) => a + b, 0);
    // }
// const sum = (...args) => {
//     return args.reduce((a, b) => a + b, 0);
// }

// =================================================== Problem 8 =======================================================

// Use the Spread Operator to Evaluate Arrays In-Place
//// Original code
    // const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
    // let arr2;

    // arr2 = [];  // Change this line

    // console.log(arr2);
// const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
// let arr2;
//
// arr2 = [...arr1];  // Change this line
//
// console.log(arr2);

// =================================================== Problem 9 =======================================================

// Use Destructuring Assignment to Extract Values from Objects

//// Original code
//     const HIGH_TEMPERATURES = {
//       yesterday: 75,
//       today: 77,
//       tomorrow: 80
//     };
//
//     // Only change code below this line
//
//     const today = HIGH_TEMPERATURES.today;
//     const tomorrow = HIGH_TEMPERATURES.tomorrow;
//
//     // Only change code above this line

    // const HIGH_TEMPERATURES = {
    //     yesterday: 75,
    //     today: 77,
    //     tomorrow: 80
    // };

// Only change code below this line

// const {today, tomorrow} = HIGH_TEMPERATURES;

// Only change code above this line

// =================================================== Problem 10 ======================================================

// Use Destructuring Assignment to Assign Variables from Objects
    //const HIGH_TEMPERATURES = {
    //   yesterday: 75,
    //   today: 77,
    //   tomorrow: 80
    // };
    //
    // // Only change code below this line
    //
    // const {today : highToday, tomorrow: highTomorrow} = HIGH_TEMPERATURES;
    //
    // // Only change code above this line

// =================================================== Problem 11 ======================================================

// Use Destructuring Assignment to Assign Variables from Nested Objects
    // const LOCAL_FORECAST = {
    //   yesterday: { low: 61, high: 75 },
    //   today: { low: 64, high: 77 },
    //   tomorrow: { low: 68, high: 80 }
    // };

    // // Only change code below this line

    // const lowToday = LOCAL_FORECAST.today.low;
    // const highToday = LOCAL_FORECAST.today.high;

    // // Only change code above this line


// const LOCAL_FORECAST = {
//     yesterday: { low: 61, high: 75 },
//     today: { low: 64, high: 77 },
//     tomorrow: { low: 68, high: 80 }
// };
// const { today: { low: lowToday, high: highToday } } = LOCAL_FORECAST;

// =================================================== Problem 12 ======================================================

// Use Destructuring Assignment to Assign Variables from Arrays
//// Original code
    // let a = 8, b = 6;
    // // Only change code below this line

// let a = 8, b = 6;
// // Only change code below this line
// [a, b] = [b, a];

// =================================================== Problem 13 ======================================================

// Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements
//// Original code
    //const source = [1,2,3,4,5,6,7,8,9,10];
    // function removeFirstTwo(list) {
    //   // Only change code below this line
    //   const arr = list; // Change this line
    //   // Only change code above this line
    //   return arr;
    // }
    // const arr = removeFirstTwo(source);

//// Solution
// const [a, b, ...arr] = list;

// =================================================== Problem 14 ======================================================

// Use Destructuring Assignment to Pass an Object as a Function's Parameters
//// Original code
    //// const stats = {
    // //   max: 56.78,
    // //   standard_deviation: 4.34,
    // //   median: 34.54,
    // //   mode: 23.87,
    // //   min: -0.75,
    // //   average: 35.85
    // // };
    //
    // // // Only change code below this line
    // // const half = (stats) => (stats.max + stats.min) / 2.0;
    // // // Only change code above this line

//// Solution
    //const stats = {
    //   max: 56.78,
    //   standard_deviation: 4.34,
    //   median: 34.54,
    //   mode: 23.87,
    //   min: -0.75,
    //   average: 35.85
    // };
    //
    // // Only change code below this line
    // const half = ({max, min}) => (max + min) / 2.0;
    // // Only change code above this line

// =================================================== Problem 15 ======================================================

// Create Strings using Template Literals
//// Original code
    // const result = {
    //   success: ["max-length", "no-amd", "prefer-arrow-functions"],
    //   failure: ["no-var", "var-on-top", "linebreak"],
    //   skipped: ["no-extra-semi", "no-dup-keys"]
    // };
    // function makeList(arr) {
    //   // Only change code below this line
    //   const failureItems = [];
    //   // Only change code above this line

    //   return failureItems;
    // }

    // const failuresList = makeList(result.failure);

//// Solution
    //const result = {
    //   success: ["max-length", "no-amd", "prefer-arrow-functions"],
    //   failure: ["no-var", "var-on-top", "linebreak"],
    //   skipped: ["no-extra-semi", "no-dup-keys"]
    // };
    // function makeList(arr) {
    //   // Only change code below this line
    //   const failureItems = [];
    //   arr.forEach(prop =>{
    //     failureItems.push(`<li class="text-warning">${prop}</li>`);
    //   });
    //   // Only change code above this line
    //
    //   return failureItems;
    // }
    //
    // const failuresList = makeList(result.failure);
    // console.log(failuresList);


// =================================================== Problem 16 ======================================================

// Write Concise Object Literal Declarations Using Object Property Shorthand
//// Original code
    // const createPerson = (name, age, gender) => {
    //     // Only change code below this line
    //     return {
    //         name: name,
    //         age: age,
    //         gender: gender
    //     };
    //     // Only change code above this line
    // };

//// Solution
    // const createPerson = (name, age, gender) => ({name, age, gender});

// =================================================== Problem 17 ======================================================

// Write Concise Declarative Functions with ES6
//// Original code
//// Only change code below this line
    // const bicycle = {
    //   gear: 2,
    //   setGear: function(newGear) {
    //     this.gear = newGear;
    //   }
    // };
    // // Only change code above this line
    // bicycle.setGear(3);
    // console.log(bicycle.gear);

//// Solution
    //// Only change code below this line
    // const bicycle = {
    //   gear: 2,
    // setGear(newGear) {
    //   this.gear = newGear;
    // }
    // };
    // // Only change code above this line
    // bicycle.setGear(3);
    // console.log(bicycle.gear);

// =================================================== Problem 18 ======================================================

// Use class Syntax to Define a Constructor Function
//// Original code
    // // Only change code below this line
    //
    // // Only change code above this line
    //
    // const carrot = new Vegetable('carrot');
    // console.log(carrot.name); // Should display 'carrot'

//// Solution
    //// Only change code below this line
    // class Vegetable{
    //   constructor(name){
    //     this.name = name;
    //   }
    // }
    // // Only change code above this line
    //
    // const carrot = new Vegetable('carrot');
    // console.log(carrot.name); // Should display 'carrot'

// =================================================== Problem 19 ======================================================

// Use getters and setters to Control Access to an Object
//// Original code

//// Solution

// =================================================== Problem 20 ======================================================

//// Original code

//// Solution

// =================================================== Problem 21 ======================================================

//// Original code

//// Solution

// =================================================== Problem 22 ======================================================

//// Original code

//// Solution

// =================================================== Problem 23 ======================================================

//// Original code

//// Solution

// =================================================== Problem 24 ======================================================

//// Original code

//// Solution

// =================================================== Problem 25 ======================================================

//// Original code

//// Solution

// =================================================== Problem 26 ======================================================

//// Original code

//// Solution

// =================================================== Problem 27 ======================================================

//// Original code

//// Solution

// =================================================== Problem 28 ======================================================

//// Original code

//// Solution

// =================================================== Problem 29 ======================================================

//// Original code

//// Solution