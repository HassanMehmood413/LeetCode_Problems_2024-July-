/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function (nums, pivot) {
    let first = []
    let second = []
    let last = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > pivot) {
            first.push(nums[i])
        }
        else if (nums[i] < pivot) {
            last.push(nums[i])
        }
        else {
            second.push(nums[i])
        }
    }
    return last.concat(second,first)
};