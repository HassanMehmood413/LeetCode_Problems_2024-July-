/**
 * @param {number[]} nums
 * @return {number}
 */
var minSwaps = function (nums) {
    let count = 0
    //Length of sliding window
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 1) {
            count++
        }
    }
    let array = [...nums]
    let new_array = nums.concat(array)
    // [0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 0, 0]
    let max = 0
    let left = 0
    let ones = 0
    for (let right = 0; right < new_array.length; right++) {
        if (new_array[right] == 1) {
            ones++
        }
        if (right - left + 1 > count) {
            if (new_array[left] == 1) {
                ones--
            }
            left++
        }
        max = Math.max(max, ones)
    }
    return count - max
};