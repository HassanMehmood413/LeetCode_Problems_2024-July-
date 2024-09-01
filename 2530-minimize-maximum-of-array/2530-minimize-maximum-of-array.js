/**
 * @param {number[]} nums
 * @return {number}
 */
var minimizeArrayValue = function (nums) {
    let total = 0
    let ans = 0
    for (let i = 0; i < nums.length; i++) {
        total += nums[i]
        let cur = Math.floor((total + i) / (i + 1))
        ans = Math.max(cur, ans)

    }
    return ans
};