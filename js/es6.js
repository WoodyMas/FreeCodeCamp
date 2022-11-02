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