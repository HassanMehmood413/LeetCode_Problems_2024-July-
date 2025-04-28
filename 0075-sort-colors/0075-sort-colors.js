/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    let left = 0
    let right = nums.length - 1
    let index = 0
    while (index <= right) {
        if (nums[index] == 0) {
            [nums[index], nums[left]] = [nums[left], nums[index]]
            left++
            index++
        }
        else if (nums[index] == 2) {
            [nums[index], nums[right]] = [nums[right], nums[index]]
            right = right - 1
        }
        else {
            index++
        }
    }
    return nums
};