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

// Slice and Splice

// You are given two arrays and an index.
//
// Copy each element of the first array into the second array, in order.
//
// Begin inserting elements at index n of the second array.
//
// Return the resulting array. The input arrays should remain the same after the function runs.

//// My Solution

    //   function frankenSplice(arr1, arr2, n) {
    //     let newArr =[];
    //     newArr.push(...arr2);
    //     newArr.splice(n, 0, ...arr1);
    //     return newArr;
    //   }
    //
    //   console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
    //   console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));
    //   console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));


// =================================================== Problem 13 =======================================================

// Falsy Bouncer

// Remove all falsy values from an array. Return a new array; do not mutate the original array.
//
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
//
// Hint: Try converting each value to a Boolean.

// My Solution

    // function bouncer(arr) {
    //     let badCondition;
    //     let newArr = [];
    //     for (let i = 0; i < arr.length; i++) {
    //         badCondition =
    //             typeof arr[i] === "undefined"
    //             || arr[i] === false
    //             || arr[i] === 0
    //             || arr[i] === ""
    //             || arr[i] === null
    //             || typeof arr[i] === "number" && isNaN(arr[i]);
    //         if (!badCondition) {
    //             newArr.push(arr[i]);
    //         }
    //     }
    //     console.log(newArr);
    //     return newArr;
    // }

    // let testArr = [null, NaN, 1, 2, undefined];
    // console.log(isNaN(testArr[1]));

    // bouncer([7, "ate", "", false, 9]);
    // bouncer([null, NaN, 1, 2, undefined]);

// =================================================== Problem 14 =======================================================

// Where do I Belong

// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.
//
// For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).
//
// Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

// My Awful Solution

    //function getIndexToIns(arr, num) {
    //   let midVal = 0;
    //   let newArr = [];
    //   for (let i = 0; i < arr.length; i++) {
    //     midVal = num;
    //     if (midVal > arr[i]) {
    //       arr.splice(i+1, 0, midVal);
    //       break;
    //         }
    //       }
    //     newArr = arr.sort(function(a, b) {
    //       return a - b
    //     });
    //   console.log((newArr.indexOf(num) !== -1) ? newArr.indexOf(num) : 0);
    //   console.log(newArr);
    //   return (newArr.indexOf(num) !== -1) ? newArr.indexOf(num) : 0;
    // }
    //
    // getIndexToIns([40, 60], 50);
    // getIndexToIns([30, 12, 50, 122], 45);
    // getIndexToIns([2, 5, 10], 15);
    // getIndexToIns([], 1);

// =================================================== Problem 15 =======================================================

// Mutations

// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
//
// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
//
// The arguments ["hello", "hey"] should return false because the string hello does not contain a y.
//
// Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.


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
