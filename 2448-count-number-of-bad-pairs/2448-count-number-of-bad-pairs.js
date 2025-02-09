/**
 * @param {number[]} nums
 * @return {number}
 */
var countBadPairs = function (nums) {
    let good_pairs = 0
    let total_pairs = 0
    let count = new Map()
    for (let i = 0; i < nums.length; i++) {
        total_pairs += i
        let key = nums[i] - i
        if (count.has(key)) {
            good_pairs += count.get(key)
            count.set(key, count.get(key) + 1)
        }
        else {
            count.set(key, 1)
        }
    }
    return total_pairs - good_pairs
};