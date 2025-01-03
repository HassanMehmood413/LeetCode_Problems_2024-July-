/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToSplitArray = function (nums) {
    let total_sum = nums.reduce((a, b) => a + b, 0)
    let count = 0
    let pre = 0

    for (let i = 0; i < nums.length - 1; i++) {
        pre += nums[i]
        let diff = total_sum - pre
        if (pre >= diff) {
            count++
        }
    }
    return count

};