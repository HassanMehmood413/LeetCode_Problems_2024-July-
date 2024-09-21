/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    let l = 0
    let r = 0
    let count = 0
    while (r < nums.length - 1) {
        let max = 0
        for (let i = l; i < r + 1; i++) {
            max = Math.max(max, i + nums[i])
        }
        l = r + 1
        r = max
        count++
    }
    return count
};