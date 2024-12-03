/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
    let left = 0
    let right = nums.length - 1
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if (nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1]) {
            return mid
        }
        else if (nums[mid+1] > nums[mid]) {
            left = mid + 1
        }
        else {
            right = mid - 1
        }
    }
    return 0
};