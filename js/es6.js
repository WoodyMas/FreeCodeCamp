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