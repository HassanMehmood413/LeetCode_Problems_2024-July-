/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumLength = function (nums) {
    let c = nums[0] % 2
    let even = 0
    let odd = 0
    let both = 0
    for (const num of nums) {
        if (num % 2 == 0) {
            even++
        }
        else {
            odd++
        }
        if (num % 2 == c) {
            both++
            c = 1 - c
        }

    }
    return Math.max(even, odd, both)
}