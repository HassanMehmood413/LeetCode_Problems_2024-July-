/**
 * @param {number[][]} nums
 * @return {number}
 */
var matrixSum = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        nums[i] = nums[i].sort((a, b) => b - a)
    }
    let a = 0
    let i = 0
    let j = 0
    let arr = []
    let sum = 0, max = 0
    while (nums[i].length != 0) {
        arr.push(nums[i].shift())
        i++
        if (i == nums.length) {
            let max = Math.max(...arr)
            sum = sum + max
            arr = []
            j++
            i = 0
        }
    }
    return sum
};