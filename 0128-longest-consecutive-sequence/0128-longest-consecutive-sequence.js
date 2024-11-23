/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    let set = new Set(nums)
    let max = 0
    for (let i = 0; i < nums.length; i++) {
        if (!set.has(nums[i] - 1)) {
            let count = 1
            num = nums[i]
            while (set.has(num + 1)) {
                num = num + 1
                count++
            }
            max = Math.max(max, count)
        }
    }
    return max
};