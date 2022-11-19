//////////////////////////////////////////// Regular Expressions Practice //////////////////////////////////////////////

///////////////////////////////////////////////////// Problem 1 ////////////////////////////////////////////////////////
// // Using the Test Method
//     let myString = "Hello, World!";
//     let myRegex = /Hello/;
//     let result = myRegex; // Change this line
//
// // Solution
//     let myString = "Hello, World!";
//     let myRegex = /Hello/;
//     let result = myRegex.test(myString);


///////////////////////////////////////////////////// Problem 2 ////////////////////////////////////////////////////////
// Match Literal Strings
    //let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
    // let waldoRegex = /search/; // Change this line
    // let result = waldoRegex.test(waldoIsHiding);

// Solution
    // let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
    // let waldoRegex = /Waldo/; // Change this line
    // let result = waldoRegex.test(waldoIsHiding);

///////////////////////////////////////////////////// Problem 3 ////////////////////////////////////////////////////////
// Match a Literal String with Different Possibilities
    // let petString = "James has a pet cat.";
    // let petRegex = /change/; // Change this line
    // let result = petRegex.test(petString);

// Solution
    // let petString = "James has a pet cat.";
    // let petRegex = /dog|cat|bird|fish/; // Change this line
    // let result = petRegex.test(petString);


///////////////////////////////////////////////////// Problem 4 ////////////////////////////////////////////////////////
// Problem 4 of 33: Ignore Case While Matching
    //let myString = "freeCodeCamp";
    // let fccRegex = /change/; // Change this line
    // let result = fccRegex.test(myString);

// Solution
    // let myString = "freeCodeCamp";
    // let fccRegex = /freecodecamp/i; // Change this line
    // let result = fccRegex.test(myString);

///////////////////////////////////////////////////// Problem 5 ////////////////////////////////////////////////////////
// Problem 5 of 33: Extract Matches
    //let extractStr = "Extract the word 'coding' from this string.";
    // let codingRegex = /change/; // Change this line
    // let result = extractStr; // Change this line

// Solution
    //     let extractStr = "Extract the word 'coding' from this string.";
    //     let codingRegex = /coding/; // Changed
    //     let result = extractStr.match(codingRegex); // Changed

///////////////////////////////////////////////////// Problem 6 ////////////////////////////////////////////////////////
// Problem 6 of 33: Find More Than the First Match
    // let twinkleStar = "Twinkle, twinkle, little star";
    // let starRegex = /change/; // Change this line
    // let result = twinkleStar; // Change this line

// Solution
    // let twinkleStar = "Twinkle, twinkle, little star";
    // let starRegex = /twinkle/gi; // Changed
    // let result = twinkleStar.match(starRegex); // Changed

///////////////////////////////////////////////////// Problem 7 ////////////////////////////////////////////////////////
// Problem 7 of 33: Match Anything with Wildcard Period
    // let exampleStr = "Let's have fun with regular expressions!";
    // let unRegex = /change/; // Change this line
    // let result = unRegex.test(exampleStr);

// Solution
    // let exampleStr = "Let's have fun with regular expressions!";
    // let unRegex = /un./; // Changed
    // let result = unRegex.test(exampleStr);



///////////////////////////////////////////////////// Problem 8 ////////////////////////////////////////////////////////
// Problem 8 of 33: Match Single Character with Multiple Possibilities
    // let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
    // let vowelRegex = /change/; // Change this line
    // let result = vowelRegex; // Change this line

// Solution
    // let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
    // let vowelRegex = /[aeiou]/gi; // Changed
    // let result = quoteSample.match(vowelRegex); // Changed

///////////////////////////////////////////////////// Problem 9 ////////////////////////////////////////////////////////
// Problem 9 of 33: Match Letters of the Alphabet
    // let quoteSample = "The quick brown fox jumps over the lazy dog.";
    // let alphabetRegex = /change/; // Change this line
    // let result = alphabetRegex; // Change this line

// Solution
    // let quoteSample = "The quick brown fox jumps over the lazy dog.";
    // let alphabetRegex = /[a-z]/gi; // Changed
    // let result = quoteSample.match(alphabetRegex); // Changed

///////////////////////////////////////////////////// Problem 10 ///////////////////////////////////////////////////////
// Problem 10 of 33: Match Numbers and Letters of the Alphabet
    // let quoteSample = "Blueberry 3.141592653s are delicious.";
    // let myRegex = /change/; // Change this line
    // let result = myRegex; // Change this line

    //Create a single regex that matches a range of letters between h and s, and a range of numbers between 2 and 6. Remember to include the appropriate flags in the regex.

// Solution
    // let quoteSample = "Blueberry 3.141592653s are delicious.";
    // let myRegex = /[h-s2-6]/gi; // Changed
    // let result = quoteSample.match(myRegex); // Changed

///////////////////////////////////////////////////// Problem 11 ///////////////////////////////////////////////////////
// Problem 11 of 33: Match Single Characters Not Specified
    // let quoteSample = "3 blind mice.";
    // let myRegex = /change/; // Change this line
    // let result = myRegex; // Change this line

    //Create a single regex that matches all characters that are not a number or a vowel. Remember to include the appropriate flags in the regex.

// Solution
    // let quoteSample = "3 blind mice.";
    // let myRegex = /[^aeiou1-9]/gi; // Changed
    // let result = quoteSample.match(myRegex); // Changed

///////////////////////////////////////////////////// Problem 12 ///////////////////////////////////////////////////////
// Problem 12 of 33: Match Characters that Occur One or More Times
    // let difficultSpelling = "Mississippi";
    // let myRegex = /change/; // Change this line
    // let result = difficultSpelling.match(myRegex);

// You want to find matches when the letter s occurs one or more times in Mississippi. Write a regex that uses the + sign.

// Solution
// let difficultSpelling = "Mississippi";
// let myRegex = /ss+/g; // Change this line
// let result = difficultSpelling.match(myRegex);

///////////////////////////////////////////////////// Problem 13 ///////////////////////////////////////////////////////
// Problem 13 of 33: Match Characters that Occure Zero or More Times
    // // Only change code below this line
    // let chewieRegex = /change/; // Change this line
    // // Only change code above this line
    //
    // let result = chewieQuote.match(chewieRegex);

    // For this challenge, chewieQuote has been initialized as the string Aaaaaaaaaaaaaaaarrrgh! behind the scenes. Create a regex chewieRegex that uses the * character to match an uppercase A character immediately followed by zero or more lowercase a characters in chewieQuote. Your regex does not need flags or character classes, and it should not match any of the other quotes.

// Solution
    // // Only change code below this line
    // let chewieRegex = /Aa*/; // Change this line
    // // Only change code above this line
    //
    // let result = chewieQuote.match(chewieRegex);

///////////////////////////////////////////////////// Problem 14 ///////////////////////////////////////////////////////
// Find Characters with Lazy Matching
    // let text = "<h1>Winter is coming</h1>";
    // let myRegex = /<.*>/; // Change this line
    // let result = text.match(myRegex);

    // Fix the regex /<.*>/ to return the HTML tag <h1> and not the text "<h1>Winter is coming</h1>". Remember the wildcard . in a regular expression matches any character.

// Solution
    // let text = "<h1>Winter is coming</h1>";
    // let myRegex = /<[a-z1-9]*?>/; // Change this line
    // let result = text.match(myRegex);
    // console.log(result);

///////////////////////////////////////////////////// Problem 15 ///////////////////////////////////////////////////////
// Find One or More Criminals in a Hunt
    // let reCriminals = /./; // Change this line

// Write a greedy regex that finds one or more criminals within a group of other people. A criminal is represented by the capital letter C.

// Solution
    // let reCriminals = /C+/; // Changed

///////////////////////////////////////////////////// Problem 16 ///////////////////////////////////////////////////////
///////////////////////////////////////////////////// Problem 17 ///////////////////////////////////////////////////////
///////////////////////////////////////////////////// Problem 18 ///////////////////////////////////////////////////////
///////////////////////////////////////////////////// Problem 19 ///////////////////////////////////////////////////////
///////////////////////////////////////////////////// Problem 20 ///////////////////////////////////////////////////////
///////////////////////////////////////////////////// Problem 21 ///////////////////////////////////////////////////////
///////////////////////////////////////////////////// Problem 22 ///////////////////////////////////////////////////////
///////////////////////////////////////////////////// Problem 23 ///////////////////////////////////////////////////////
///////////////////////////////////////////////////// Problem 24 ///////////////////////////////////////////////////////
///////////////////////////////////////////////////// Problem 25 ///////////////////////////////////////////////////////
///////////////////////////////////////////////////// Problem 26 ///////////////////////////////////////////////////////
///////////////////////////////////////////////////// Problem 27 ///////////////////////////////////////////////////////
///////////////////////////////////////////////////// Problem 28 ///////////////////////////////////////////////////////
///////////////////////////////////////////////////// Problem 29 ///////////////////////////////////////////////////////
///////////////////////////////////////////////////// Problem 30 ///////////////////////////////////////////////////////
///////////////////////////////////////////////////// Problem 31 ///////////////////////////////////////////////////////
///////////////////////////////////////////////////// Problem 32 ///////////////////////////////////////////////////////
///////////////////////////////////////////////////// Problem 33 ///////////////////////////////////////////////////////