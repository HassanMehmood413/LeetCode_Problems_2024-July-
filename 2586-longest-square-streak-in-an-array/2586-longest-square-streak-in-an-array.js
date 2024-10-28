/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSquareStreak = function (nums) {
    nums = nums.sort((a, b) => a - b)
    let map = new Map()
    nums.forEach(element => {
        if (map.has(element)) {
            map.set(element, map.get(element) + 1)
        }
        else {
            map.set(element, 1)
        }
    });
    let max = -1
    for (let i = 0; i < nums.length; i++) {
        let count = 0
        let a = nums[i]
        while (map.has(a)) {
            count++
            a = a * a
        }
        max = Math.max(max, count)
    }
    return max <= 1 ? -1 : max
};