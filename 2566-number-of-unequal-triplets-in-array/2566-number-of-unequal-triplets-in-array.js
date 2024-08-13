/**
 * @param {number[]} nums
 * @return {number}
 */
var unequalTriplets = function (nums) {
    let i = 0
    let j = 1
    let k = 1
    let count = 0
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            for (let k = 0; k < nums.length; k++) {
                if (nums[i] != nums[j] && nums[j] != nums[k] && nums[i] != nums[k] && i < j && j < k && i < k) {
                    count++
                }

            }

        }
    }
    return count

};