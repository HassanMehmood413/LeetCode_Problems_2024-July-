/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function (nums) {
    let str = ''
    let l = 0
    for (let i = 0; i <= nums.length - 1; i++) {
        str += nums[i][i] == '0' ? '1' : '0'
    }
    return str
};