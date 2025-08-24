/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
    let map = new Map()

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i]
        if (map.has(num)) {
            let idx = map.get(num)
            if (Math.abs(i - idx) <= k) {
                return true
            }

        }
        map.set(num, i)

    }
    return false

};