/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function (nums) {
    let check = nums / nums.length
    // if (check % 2 != 0) return false

    let map = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1)

        }
        else {
            map.set(nums[i], 1)
        }
    }
    for (let [key, value] of map) {
        if (value % 2 != 0) {
            return false
        }
    }
    return true
};