/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let left = 0
    let right = left + 1
    while (right <= nums.length - 1) {
        if (nums[left] !== nums[right]) {
            nums[left + 1] = nums[right]
            left++
        }
        right++
    };
    nums = nums.slice(0, left + 1)
    return nums.length
}
