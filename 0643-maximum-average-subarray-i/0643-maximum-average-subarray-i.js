/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {

    let left = 0
    let right = 0
    let max = -Infinity
    for (let i = 0; i < k; i++) {
        right = right + nums[i]
    }
    let i = k - 1
    while (left <= nums.length - k) {
        avg = right / k
        if (avg > max) {
            max = avg
        }
        i++
        right = right - nums[left] + nums[i]
        left++
    }
    return max

}