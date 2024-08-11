/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
    let max = Math.max(...nums)
    index = nums.indexOf(max)
    nums.splice(index, 1)
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] * 2 <= max) {
            continue
        }
        else {
            return -1
        }
    }
    return index
};