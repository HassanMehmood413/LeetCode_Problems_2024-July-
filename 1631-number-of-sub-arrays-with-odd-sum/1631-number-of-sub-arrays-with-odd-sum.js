/**
 * @param {number[]} arr
 * @return {number}
 */
var numOfSubarrays = function (arr) {
    let prefixsum = 0, oddsum = 0
    for (let i = 0; i < arr.length; i++) {
        prefixsum += arr[i]
        oddsum += prefixsum % 2
        console.log(prefixsum, oddsum)
    }
    oddsum += (arr.length - oddsum) * oddsum
    return oddsum % 1_000_000_007
};