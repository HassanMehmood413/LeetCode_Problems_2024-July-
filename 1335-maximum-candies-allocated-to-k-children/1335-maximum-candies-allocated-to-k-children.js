/**
 * @param {number[]} candies
 * @param {number} k
 * @return {number}
 */
var maximumCandies = function (candies, k) {
    candies = candies.sort((a, b) => a - b)
    let sum = candies.reduce((a, b) => a + b, 0)
    if (sum < k) return 0
    let left = 1
    let right = Math.floor(sum / k)
    let result = 0
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        let count = 0
        for (let candy of candies) {
            count += Math.floor(candy / mid)
            if (count >= k) break;
        }
        if (count >= k) {
            left = mid + 1
            result = mid
        }
        else {
            right = mid - 1
        }
    }
    return result
};