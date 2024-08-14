/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function (nums) {
    nums = nums.toString().split('')
    let arr = []
    for (let i = 0; i < nums.length; i++) {
        a = Number(nums[i])
        if (isNaN(a)) {
            continue
        }
        else {
            arr.push(nums[i])
        }
    }
    return arr
};