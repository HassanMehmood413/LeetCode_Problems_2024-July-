/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
    if(k<=1) return 0
    let left = 0
    let pro = 1
    let count = 0
    for (let right = 0; right < nums.length; right++) {
        pro = pro * nums[right]
        while (pro >= k) {
            pro /= nums[left]
            left++
        }
        count += right - left + 1
    }
    return count
};