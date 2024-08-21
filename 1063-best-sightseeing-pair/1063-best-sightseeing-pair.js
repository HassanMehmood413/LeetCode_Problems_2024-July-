/**
 * @param {number[]} values
 * @return {number}
 */
var maxScoreSightseeingPair = function (values) {
    let max = -Infinity
    let maxl = values[0] + 0
    for (let j = 1; j < values.length; j++) {
        a = maxl + values[j] - j
        max = Math.max(a, max)
        maxl = Math.max(maxl, values[j] + j)
    }
    return max
};