/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let res = []
    let arr = []
    nums = nums.sort((a, b) => a - b)
    // [-4, -1, -1, 0, 1, 2]
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == nums[i - 1]) {
            continue
        }
        let b = i + 1
        let c = nums.length - 1
        while (b < c) {
            let sum = nums[i] + nums[b] + nums[c]
            if (sum > 0) {
                c--
            }
            else if (sum < 0) {
                b++
            }
            else {
                res.push([nums[i], nums[b], nums[c]])
                b++
                c--
                while (b < c && nums[b] == nums[b - 1]) {
                    b++
                }
                while (b < c && nums[c] == nums[c + 1]) {
                    c--
                }
            }
        }
    }
    return res
};