/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function (nums) {
    let l = []
    let r = []
    let prefix = 0
    for (let i = 0; i < nums.length; i++) {
        l[i] = prefix
        prefix += nums[i]
    }
    let postfix = 0
    for (let i = nums.length - 1; i >= 0; i--) {
        r[i] = postfix
        postfix += nums[i]
    }
    let arr = []
    for (let i = 0; i < nums.length; i++) {
        let a = Math.abs(l[i] - r[i])
        arr.push(a)
    }
    return arr
};