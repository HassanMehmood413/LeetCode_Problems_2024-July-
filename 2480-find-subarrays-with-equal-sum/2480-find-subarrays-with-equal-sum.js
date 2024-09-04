/**
 * @param {number[]} nums
 * @return {boolean}
 */
var findSubarrays = function (nums) {
    let map = new Map()
    for (let i = 0; i < nums.length - 1; i++) {
        let a = nums[i] + nums[i + 1]
        if (map.has(a)) {
            return true
        }
        map.set(a)
    }
    return false
};