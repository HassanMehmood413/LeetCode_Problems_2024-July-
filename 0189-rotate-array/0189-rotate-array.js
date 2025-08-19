/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    nums.reverse()
    k = k % nums.length

    let l = 0
    let r = k - 1

    while (l < r) {
        let temp = nums[l]
        nums[l] = nums[r]
        nums[r] = temp
        l++
        r--
    }


    l = k
    r = nums.length - 1
    while (l < r) {
        let temp = nums[l]
        nums[l] = nums[r]
        nums[r] = temp
        l++
        r--
    }
    return nums

};