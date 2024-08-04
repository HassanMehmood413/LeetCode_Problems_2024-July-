/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
    let n = candies.length
    let array = new Array(n).fill(true)
    let sum;
    let max = Math.max(...candies)
    for (let i = 0; i < candies.length; i++) {
        sum = candies[i] + extraCandies
        if (sum >= max) {
            continue
        }
        else {
            array[i] = false
        }
    }
    return array
};