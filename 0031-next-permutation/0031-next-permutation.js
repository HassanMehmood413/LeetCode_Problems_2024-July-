/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
    // Finding lexigraphicall order

    // Find the first smallest number
    // Find the first number greater than the smallest one
    // swap them 
    // and reverse the array after the first smallest number

    let i = nums.length - 2
    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--
    }

    if (i >= 0) {
        let j = nums.length - 1
        while (nums[j] <= nums[i]) {
            j--
        }
        [nums[i], nums[j]] = [nums[j], nums[i]]
    }

    let first = i + 1
    let last = nums.length - 1
    while (first < last) {
        [nums[first], nums[last]] = [nums[last], nums[first]]
        first++
        last--
    }
    return nums



};