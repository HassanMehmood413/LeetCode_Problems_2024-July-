/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    let arr = []
    let left = 0
    let sum = 0
    let max_sub = Infinity

    for (let right = 0; right < nums.length; right++) {

        arr.push(nums[right])
        sum = sum + nums[right]
        while (arr.length > 0 && sum >= target) {
            max_sub = Math.min(max_sub, arr.length)
            sum = sum - nums[left]
            arr.shift()
            left++
        }
    }
    return max_sub == Infinity ? 0 : max_sub
};