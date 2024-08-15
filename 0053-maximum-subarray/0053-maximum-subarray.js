/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (arr) {
    // let maxEndingHere = arr[0];
    // let maxSoFar = arr[0];

    // for (let i = 1; i < arr.length; i++) {
    //     maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
    //     maxSoFar = Math.max(maxSoFar, maxEndingHere);
    // }

    // return maxSoFar;
    let sum = 0
    let max = arr[0]
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i]
        if(sum > max){
            max = sum
        }
        if(sum < 0){
            sum = 0
        }
    }
    return max
};