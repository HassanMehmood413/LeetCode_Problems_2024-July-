/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
    nums = nums.filter((value,index)=>{
        return nums.indexOf(value) == index
    })
    let i = 0
    let j = nums.length - 1
    while (i <= j) {
        mid = Math.floor((i + j) / 2)
        // left half is sorted
        if (nums[i] <= nums[mid]) {
            if (target == nums[mid]) {
                return true
            }
            else if (nums[i] <= target && target <= nums[mid]) {
                j = mid - 1
            }
            else {
                i = mid + 1
            }

        }

        //Right half is sorted
        else {

            if (target == nums[mid]) {
                return true
            }
            else if (nums[mid] < target && target <= nums[j]) {
                i = mid + 1
            }
            else {
                j = mid - 1
            }
        }

    }
    return false

};