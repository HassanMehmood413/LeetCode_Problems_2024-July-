/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums = nums.sort((a, b) => a - b)
    let result = []

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == nums[i - 1]) {
            continue
        }
        let j = i + 1
        let k = nums.length - 1
        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k]
            if (sum > 0) {
                k--
            }
            else if (sum < 0) {
                j++
            }
            else if (sum == 0) {
                result.push([nums[i], nums[j], nums[k]])
                j++
                k--

                while (j < k && nums[j] == nums[j - 1]) {
                    j++
                }

                while (j < k && nums[k] == nums[k + 1]) {
                    k--
                }
            }
        }
    }
    return result
};