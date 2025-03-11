/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function (arr, k, threshold) {
    // let check = []
    // let count = 0
    // let sum = 0
    // let left = 0
    // let right = 0
    // while (right < arr.length) {
    //     check.push(arr[right])
    //     sum = sum + arr[right]
    //     if (check.length == k) {
    //         let avg = sum / k
    //         if (avg >= threshold) count++
    //     }
    //     while (check.length >= k) {
    //         check.shift()
    //         sum -= arr[left]
    //         left++
    //     }
    //     right++
    // }
    // return count


    let count = 0
    let sum = 0
    let l = 0

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]

        if (i - l + 1 >= k) {
            let avg = sum / k
            if (avg >= threshold) count++
            sum -= arr[l]
            l++
        }
    }
    return count
};