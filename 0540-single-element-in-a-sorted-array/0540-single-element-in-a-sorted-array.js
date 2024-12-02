/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
    let left = 0
    let right = nums.length - 1
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if (mid % 2 == 0) {

            if (nums[mid] == nums[mid - 1]) {
                right = mid - 1

            }
            else if (nums[mid] == nums[mid + 1]) {
                left = mid + 1
            }
            else {
                return nums[mid]
            }
        }
        else if (mid % 2 !== 0) {
            if (nums[mid] == nums[mid - 1]) {
                left = mid + 1

            }
            else if (nums[mid] == nums[mid + 1]) {
                right = mid - 1
            }
            else {
                return nums[mid]
            }
        }
    }
};