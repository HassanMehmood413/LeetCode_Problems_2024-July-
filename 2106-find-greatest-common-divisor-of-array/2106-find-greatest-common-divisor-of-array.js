/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function (nums) {
    let min = Math.min(...nums)
    let max = Math.max(...nums)
    let min_2 = -Infinity
    let max_2 = -Infinity
    for (let i = 1; i <= min; i++) {
        if (min % i == 0 && max % i == 0) {
            if (i > max_2) {
                min_2 = max_2
                max_2 = i
            }
        }
    }
    return max_2
};