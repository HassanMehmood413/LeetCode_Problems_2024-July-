/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverage = function (nums) {
    nums = nums.sort((a, b) => a - b)
    let average = []
    let left = 0
    let right = nums.length - 1
    while (left <= right) {
        let avg = (nums[left] + nums[right]) / 2
        average.push(avg)
        left++
        right--

    }
    return Math.min(...average)


};