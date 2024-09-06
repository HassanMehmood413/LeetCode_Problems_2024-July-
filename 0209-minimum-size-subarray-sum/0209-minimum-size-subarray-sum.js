/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    let left = 0
    let sum = nums[0]
    let length = 1
    let min = Infinity
    for (let right = 1; right <= nums.length; right++) {
        if (sum >= target) {
            while (sum >= target) {
                min = Math.min(min, length)
                sum = sum - nums[left]
                left++
                length--
            }
        }
        sum = sum + nums[right]
        length++

    }
    if (min == Infinity) {
        return 0
    }
    else {
        return min
    }
};