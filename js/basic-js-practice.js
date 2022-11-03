//FreeCodeCamp.org
//Let's get green squares!

// Learning comments
    // Commenting code
    /* Multi-line comment */

// Declaring variables.
    // var myName;

// Assigning a variable:
    //var a;
    // a = 7;

// Assigning the value of one variable to another
    // var a;
    // a = 7;
    // var b;
    // b = a;

// Initialize variables with the assignment operator
    // var a = 9;

// Declare String Variables
    //let myFirstName = "Mason";
    // let myLastName = "Wudtee";

// Understanding Uninitialized Variables
// Only change code below this line
// Only change code below this line
    // var a;
    // var b;
    // var c;
    //
    // a = 5;
    // b = 10;
    // c = "I am a"
    //
    //
    // // Only change code above this line
    //
    // a = a + 1;
    // b = b + 5;
    // c = c + " String!";`

// Iterate Through an Array with a For Loop
//     // Setup
//     const myArr = [2, 3, 4, 5, 6];
//
//     // Only change code below this line
//     let total = 0;
//     for (var i = 0; i < myArr.length; i++){
//         console.log(myArr[i]);
//         total += myArr[i];
//
//     }
//
//     console.log(total);

// Profile lookup (objects)
function lookUpProfile(name, prop) {
    // Only change code below this line
    const result = contacts.filter(contact => contact.firstName === name);

    if (result.length > 0) {
        if (result[0][prop]) {
            return result[0][prop];
        } else {
            return "No such property";
        }
    } else {
        return "No such contact";
    }
}

// Generate Random Fractions with JavaScript
function randomFraction() {

    // Only change code below this line

    return Math.random(0 *1);

    // Only change code above this line
}

// Generate Random Whole Numbers with JavaScript
function randomWholeNum() {
    // Only change code below this line
    return Math.floor(Math.random() * 10);
}

// Generate Random Whole Numbers within a Range
function randomRange(myMin, myMax) {
    // Only change code below this line
    return Math.floor(Math.random() * (myMax - myMin +1) + myMin);
    // Only change code above this line
}

// Use the parseInt Function
function convertToInteger(str) {
    return parseInt(str);
}

// Use the parseInt Function with a Radix
function convertToInteger(str) {
    return parseInt(str, 2);
}

// Use the Conditional (Ternary) Operator
function checkEqual(a, b) {
    return a === b ? "Equal" : "Not Equal";
}

// Use Multiple Conditional (Ternary) Operators
function checkSign(num) {
    return (num > 0) ? "positive" : (num < 0) ? "negative" : "zero";
}

// Use Recursion to Create a Countdown
function countdown(n, newArr = []) {
    if (n <= 0) {
        return newArr;
    }
    newArr.push(n);
    return countdown(n-1, newArr);
}

// Use Recursion to Create a Range of Numbers
    // PFM
    function rangeOfNumbers(startNum, endNum) {
        return startNum == endNum ? [startNum] : [startNum, ... rangeOfNumbers(startNum+1, endNum)];
    }
    // Other hint
    function rangeOfNumbers2(startNum, endNum) {
        if (endNum < startNum) {
            return [];
        } else {
            const numbers = rangeOfNumbers(startNum, endNum - 1);
            numbers.push(endNum);
            return numbers;
        }
    }

// Replace Loops using Recursion
    function sum(arr, n) {
        if(n <= 0) {
            return 0;
        } else {
            return sum(arr, n - 1) + arr[n - 1];
        }
    }