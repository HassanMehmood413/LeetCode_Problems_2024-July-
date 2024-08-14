/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (arr) {
    let maxProduct = arr[0];
    let minProduct = arr[0];
    let result = arr[0];

    for (let i = 1; i < arr.length; i++) {
        let tempMax = Math.max(arr[i], maxProduct * arr[i], minProduct * arr[i]);
        let tempMin = Math.min(arr[i], maxProduct * arr[i], minProduct * arr[i]);

        maxProduct = tempMax;
        minProduct = tempMin;

        result = Math.max(result, maxProduct);
    }

    return result;

};