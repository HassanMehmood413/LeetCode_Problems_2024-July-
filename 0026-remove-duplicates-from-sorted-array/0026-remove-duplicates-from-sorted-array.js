/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let first = 0
    let second = 1

    while (second < nums.length) {
        if (nums[first] == nums[second]) {
            second++
        }
        else {
            first++
            nums[first] = nums[second]
            second++
        }
    }
    nums = nums.slice(0, first + 1)
    return nums.length
};