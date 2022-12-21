// let's create bubble sort
let unsortedArr = [2, 43, 12, 48, 3, 1, 9, 11, 26];

function bubbleSort(array) {
    // create an empty array to return
    let sortedArr = [];

    // loop through the array (starting at last index and decrementing down)
    for (let i = array.length-1; i > 0; i--) {
        // meanwhile loop through the array in incrementation
        for (let j = 0; j < i; j++) {
            // find where array[j] is less than array[j+1]
            if (array[j] < array[j+1]) {
                // store the lesser value
                let temp = array[j];
                // change array[j] to lesser value
                array[j] = array[j+1];
                // change the next value to greater value
                array[j+1] = temp;
            }
        }
        // push each index to sortedArr
        sortedArr.push(array[i]);
    }
    // return sortedArr
    return sortedArr;

}

console.log(`The unsorted array: `);
console.log(unsortedArr);

console.log(`sorted with bubble-sort: [${bubbleSort(unsortedArr)}]`);