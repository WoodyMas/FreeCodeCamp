// let's create bubble sort
let unsortedArr = [2, 43, 12, 48, 3, 1, 9, 11, 26];

function bubbleSort(array) {
    let sortedArr = [];

    for (let i = array.length-1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (array[j] < array[j+1]) {
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
        sortedArr.push(array[i]);
    }
    return sortedArr;

}

console.log(`The unsorted array: `);
console.log(unsortedArr);

console.log(`sorted with bubble-sort: [${bubbleSort(unsortedArr)}]`);