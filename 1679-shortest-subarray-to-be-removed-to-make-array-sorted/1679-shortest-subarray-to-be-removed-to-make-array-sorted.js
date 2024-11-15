/**
 * @param {number[]} arr
 * @return {number}
 */
var findLengthOfShortestSubarray = function (arr) {
    let min = Infinity
    let left = 0
    while (left < arr.length - 1 && arr[left] <= arr[left + 1]) {
        left++
    }
    if (left == arr.length - 1) return 0
    let right = arr.length - 1
    while (right > 0 && arr[right - 1] <= arr[right]) {
        right--
    }
    let minLength = Math.min(arr.length - left - 1, right);
    let i = 0, j = right
    while (i <= left && j < arr.length) {
        if (arr[i] <= arr[j]) {
            minLength = Math.min(minLength, j - i - 1)
            i++
        }
        else {
            j++
        }
    }
    return minLength
};