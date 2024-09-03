/**
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function (cost) {
    cost.sort((a, b) => a - b)
    sum = 0
    count = 0
    for (let i = cost.length - 1; i >= 0; i--) {
        if (count == 2) {
            count = 0
            continue
        }
        else {
            sum = sum + cost[i]
            count++
        }
    }
    return sum
};