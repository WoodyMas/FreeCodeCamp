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

// =================================================== Problem 7 =======================================================

// =================================================== Problem 8 =======================================================

// =================================================== Problem 9 =======================================================

// =================================================== Problem 10 =======================================================

// =================================================== Problem 11 =======================================================

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
