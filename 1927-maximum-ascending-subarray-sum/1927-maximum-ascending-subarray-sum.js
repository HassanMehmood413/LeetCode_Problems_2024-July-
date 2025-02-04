/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function (nums) {
    let sum = nums[0]
    let total = 0
    let single = sum
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            sum = sum + nums[i]
        }
        else {
            single = Math.max(sum, single)
            sum = nums[i]
        }
        total = Math.max(sum, total)
    }
    single = Math.max(total, single)
    return single
};