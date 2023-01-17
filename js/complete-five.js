//// Problem 1 Palindrome


    //function palindrome(str) {
    //     function removeSpecialChars(str) {
    //     return str.replace(/[^a-zA-Z0-9]/g, "");
    //   }
    //   let goodPalindrome = () => {
    //       str = removeSpecialChars(str.toLowerCase());
    //       let strArr = [];
    //       let revStr = [];
    //       let count = 0;
    //
    //       // put each letter into an array
    //       for (let i = 0; i < str.length; i++) {
    //       strArr.push(str[i]);
    //       }
    //       console.log(strArr);
    //       // reverse order of letters and put in new array;
    //       for (let i = strArr.length-1; i >= 0; i--) {
    //         revStr.push(strArr[i]);
    //       }
    //       console.log(revStr);
    //       for (let i = 0; i < strArr.length; i++) {
    //         if (strArr[i] === revStr[i]){
    //           count++;
    //           continue;
    //         }
    //       }
    //       if (count === strArr.length) {
    //         return true;
    //       } else {
    //         return false;
    //       }
    //   } // End goodPalindrome
    //   return goodPalindrome();
    // }
    // console.log(palindrome("A man, a plan, a canal. Panama"));