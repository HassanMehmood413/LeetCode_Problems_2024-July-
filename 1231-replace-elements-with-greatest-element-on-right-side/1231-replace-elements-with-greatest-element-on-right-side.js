/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
    let array = new Array(arr.length).fill(-1); // Create an array filled with -1

    for (let i = 0; i < arr.length; i++) {
        let a = arr.slice(i + 1); // Get the subarray from the next element
        let maxx = a.length > 0 ? Math.max(...a) : -1; // Find max or -1 if the subarray is empty
        array[i] = maxx; // Set the maximum value in the result array
    }

    return array;
};