/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function (nums) {
    let sum = 0
    for (let i = 0; i < nums.length; i++) {
        sum = sum + nums[i]
    }
    let sum2 = 0
    let ls = 0
    for (let j = 0; j < nums.length; j++) {
        if (ls == (sum - ls - nums[j])) {
            return j
        }
        ls = ls + nums[j]



    }
    return -1
};