/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var beautifulSubsets = function (nums, k) {
    let count = 0
    nums = nums.sort((a, v) => a - v)
    var again = function (start, subset) {
        if (subset.length > 0) {
            count++
        }

        for (let i = start; i < nums.length; i++) {
            let valid = true
            for (let j = 0; j < subset.length; j++) {
                if (Math.abs(nums[i] - subset[j]) == k) {
                    valid = false
                    break
                }
            }
            if (valid) {
                subset.push(nums[i])
                again(i + 1, subset)
                subset.pop()
            }
        }
    }
    again(0, [])
    return count
};