/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function (arr, k, threshold) {
    let left = 0
    let sum = 0
    let count = 0
    let right = 0
    let a = []
    while (right < arr.length) {
        a.push(arr[right])
        sum = sum + arr[right]
        if (a.length == k) {
            let avg = sum / k
            if (avg >= threshold) {
                count++
            }
        }
        while (a.length >= k) {
            sum = sum - arr[left]
            a.shift()
            left++
        }

        right++

    }
    return count
};