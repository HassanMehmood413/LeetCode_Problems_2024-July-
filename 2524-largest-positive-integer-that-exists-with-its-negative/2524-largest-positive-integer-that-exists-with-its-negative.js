/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function (nums) {
    let arr = []
    for (let i = 0; i < nums.length; i++) {
        a = nums[i] * -1
        if (nums.includes(a)) {
            arr.push(nums[i])
        }
    }
    if (arr.length != 0) {
        return Math.max(...arr)
    }
    else {
        return -1
    }
};