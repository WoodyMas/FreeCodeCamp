// =================================================== Problem 1 =======================================================
// Convert Celsius to Fahrenheit

// Original Code
    //function convertCtoF(celsius) {
    //   let fahrenheit;
    //   return fahrenheit;
    // }
    //
    // convertCtoF(30);

// Solution
    //function convertCtoF(celsius) {
    //   let fahrenheit;
    //   fahrenheit = ((celsius * (9/5)) + 32);
    //   return fahrenheit;
    // }
    //
    // convertCtoF(30);

// =================================================== Problem 2 =======================================================
// Reverse a String

// Original Code
    //function reverseString(str) {
    //   return str;
    // }
    //
    // reverseString("hello");

// Solution
    //function reverseString(str) {
    //   let newStr = [...str].reverse();
    //   for (let i = 0; i < newStr.length; i++) {
    //     str = newStr.join('');
    //   }
    //   return str;
    // }
    //
    // console.log(reverseString("hello"));


// =================================================== Problem 3 =======================================================

// Factorialize a Number

// Return the factorial of the provided integer.
//
// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
//
// Factorials are often represented with the shorthand notation n!
//
// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
//
// Only integers greater than or equal to zero will be supplied to the function.

// Solution

    // function factorialize(num) {
    //   if (num < 0) {
    //     return -1;
    //   } else if (num == 0 || num == 1) {
    //     return 1;
    //   } else {
    //     return (num * factorialize(num -1));
    //   }
    // }
    //
    // factorialize(5);


// =================================================== Problem 4 =======================================================

// Find the Longest Word in a String

// Return the length of the longest word in the provided sentence.
//
// Your response should be a number.

// My first solution

    ////// Count letters of each word and mutate word array to new length array
    // function countLetters(str) {
    //   str = str.split(' ');
    //   for (let i = 0; i < str.length; i++) {
    //     str[i] = str[i].length;
    //   }
    //   return str;
    // } // end countLetters
    //
    // ////// Find the max value of the word length
    // function findLongestWordLength(str) {
    //   str = countLetters(str);
    //   return (Math.max(...str));
    // }
    //
    // console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

// Better solution

    //function findLongestWordLength(str) {
    //   let words = str.split(' ');
    //   let maxLength = 0;
    //
    //   for (let i = 0; i < words.length; i++) {
    //     if (words[i].length > maxLength) {
    //       maxLength = words[i].length;
    //     }
    //   }
    //
    //   return maxLength;
    // }

// =================================================== Problem 5 =======================================================

// Return Largest Numbers in Arrays

// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.
//
// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

// My Solution

    //function largestOfFour(arr) {
    //   let newArr = [];
    //
    //   function findLargest(arr) {
    //     arr.forEach((elem, i, array) =>{
    //       //console.log(Math.max(...array[i]));
    //       newArr.push(Math.max(...array[i]));
    //     });
    //   } // end findLargest
    //   findLargest(arr);
    //   console.log(newArr);
    //   return newArr;
    // }
    //
    // largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

// =================================================== Problem 6 =======================================================

// Confirm the Ending

// My Solution

    //function confirmEnding(str, target) {
    //   let count = target.length;
    //   let strEval = str.substring(str.length-count);
    //   console.log(strEval === target);
    //   return strEval === target;
    // }
    //
    // confirmEnding("The prophecy is true!", "true!");

// My Solution re-factored

    //function confirmEnding(str, target) {
    //   return (str.substring(str.length-target.length) === target);
    // }

// =================================================== Problem 7 =======================================================

// Repeat a String Repeat a String

// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.

// My Solution

    //function repeatStringNumTimes(str, num) {
    //   let repeatArr = [];
    //   for (let i = 0; i < num; i++) {
    //     repeatArr.push(str);
    //   }
    //   repeatArr = repeatArr.join('');
    //
    //   return repeatArr;
    // }
    //
    // repeatStringNumTimes("abc", 3);



// =================================================== Problem 8 =======================================================

// Truncate a String

// My Solution
// function truncateString(str, num) {

//   if (typeof num === "number" && num <= str.length-1) {
//     str = str.substring(0, num) + "...";
//   } else {
//     return str;
//   }
//   console.log(str);
//   return str;
// }

// My Solution refactored

// function truncateString(str, num) {
// return (num < str.length) ? str.substring(0, num) + "..." : str;
// }

// truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);

// =================================================== Problem 9 =======================================================

// Finders Keepers

// Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.

// My Solution
// function findElement(arr, func) {
//   let num = 0;
//   //return num;
//   for (let i = 0; i < arr.length; i++) {
//     if (func(arr[i])){
//       console.log(arr[i]);
//       return arr[i];
//     }
//   }
// } // end findElement

// refactored solution of mine
// function findElement(arr, func) {
//     for (let i =0; i < arr.length; i++) {
//         if (func(arr[i])) {
//             return arr[i];
//         }
//     }
// } // End refactored findElement
//
// // slightly related solution
// //// Find all elements that satisfy a condition
// function findAllElements(arr, func) {
//     let successArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (func(arr[i])) {
//             successArr.push(arr[i]);
//         }
//     }
//     console.log(successArr);
// } // end findAllElements
//
//
//
// findElement([1, 2, 3, 4], num => num % 2 === 0);
//
// findAllElements(["feliz", "wow", "simple", "um", "little", "downed"], word => word.length > 4);

// =================================================== Problem 10 =======================================================

// Boo who

// Check if a value is classified as a boolean primitive. Return true or false.
//
// Boolean primitives are true and false.

// My Solution

    // function booWho(bool) {
    //   return typeof bool === "boolean";
    // }
    //
    // booWho(null);


// =================================================== Problem 11 =======================================================

// Title Case a Sentence

// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
//
// For the purpose of this exercise, you should also capitalize connecting words like the and of.

// My Solution

    // function titleCase(str) {
    //   str = str.split(' ');
    //   for (let i = 0; i < str.length; i++) {
    //     let strSub = str[i].substring();
    //     str[i] = strSub[0].toUpperCase() + str[i].substring(1).toLowerCase();
    //   }
    //   str = str.join(' ');
    //   return str;
    // }
    //
    // titleCase("I'm a little tea pot");
    // console.log(titleCase("Don't lose your confidence if you slip,\n be greatful for a pleasant trip,\n and pick yourself up, \n dust yourself off,\n and start all over again!"));


// =================================================== Problem 12 =======================================================

// =================================================== Problem 13 =======================================================

// =================================================== Problem 14 =======================================================

// =================================================== Problem 15 =======================================================

// =================================================== Problem 16 =======================================================

// =================================================== Problem 17 =======================================================

// =================================================== Problem 18 =======================================================

// =================================================== Problem 19 =======================================================

// =================================================== Problem 20 =======================================================

// =================================================== Problem 21 =======================================================

// =================================================== Problem 22 =======================================================

// =================================================== Problem 23 =======================================================

// =================================================== Problem 24 =======================================================

// =================================================== Problem 25 =======================================================

// =================================================== Problem 26 =======================================================

// =================================================== Problem 27 =======================================================

// =================================================== Problem 28 =======================================================

// =================================================== Problem 29 =======================================================

// =================================================== Problem 30 =======================================================

// =================================================== Problem 31 =======================================================

// =================================================== Problem 32 =======================================================

// =================================================== Problem 33 =======================================================
