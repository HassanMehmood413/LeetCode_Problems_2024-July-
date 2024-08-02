/**
 * @param {number[]} nums
 * @return {number}
 */
var findTheArrayConcVal = function (nums) {
    let i = 0
    let r = nums.length - 1
    let str = ''
    let num = 0
    while (i <= r) {
        if (nums.length == 1) {
            num = Number(nums[i]) + num
            return num
        }
        str = (nums[i]).toString() + (nums[r]).toString()
        num = Number(str) + num
        nums.splice(i, 1)
        nums.splice(r - 1, 1)
        r = r - 2
    }
    return num
};