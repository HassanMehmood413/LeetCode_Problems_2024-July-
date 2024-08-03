/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function (nums, target) {
    let count = 0
    for (let i = 0; i <= nums.length - 1; i++) {
        for (let j = 1; j <= nums.length - 1; j++) {
            if (nums[i] + nums[j] < target && i != j && i < j) {
                count++
            }
        }
    }
    return count
};