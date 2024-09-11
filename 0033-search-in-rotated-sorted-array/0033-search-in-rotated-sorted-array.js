/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let left = 0
    let right = nums.length - 1
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if (nums[0] <= nums[mid]) {

            if (nums[mid] == target) {
                return mid
            }
            else if (nums[0] <= target && target <= nums[mid]) {
                right = mid - 1
            }
            else {
                left = mid + 1
            }
        }
        else {
            if (nums[mid] == target) {
                return mid
            }
            else if (nums[mid] < target && target <= nums[nums.length - 1]) {
                left = mid + 1
            }
            else {
                right = mid - 1
            }
        }
    }
    return -1
};