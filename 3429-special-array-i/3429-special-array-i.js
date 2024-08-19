/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isArraySpecial = function (nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        let j = i + 1
        if (nums[i] % 2 == 0 && nums[j] % 2 == 0) {
            return false
        }
        else if (nums[i] % 2 != 0 && nums[j] % 2 != 0) {
            return false
        }
    }
    return true
};