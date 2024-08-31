/**
 * @param {number[]} nums
 * @return {number}
 */
var distinctAverages = function (nums) {
    nums = nums.sort((a, b) => a - b)
    let left = 0
    let right = nums.length - 1
    let avg = []
    let total = 0
    while (left < right) {
        a = nums[left] + nums[right]
        total = a / 2
        avg.push(total)
        left++
        right--
    }
    let p = avg.filter((value, index) => {
        return avg.indexOf(value) == index
    })
    return p.length
};