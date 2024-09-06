/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
        let sum = nums[0]
    let length = 1
    let max_l = Infinity
    let k = 0
    for (let i = 1; i <= nums.length; i++) {
        while (sum >= target) {
            if (length < max_l) {
                max_l = length
            }
            sum = sum - nums[k]
            k++
            length--
        }
        sum = sum + nums[i]
        length++
    }
    if (max_l == Infinity) {
        max_l = 0
    }
    return max_l
};