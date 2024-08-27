/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function (cardPoints, k) {
    let subarraysum = 0
    let length = cardPoints.length
    for (let i = 0; i < k; i++) {
        subarraysum = subarraysum + cardPoints[i]
    }
    let max = subarraysum
    for (let i = 1; i <= k; i++) {
        subarraysum = subarraysum + cardPoints[length - i] - cardPoints[k - i]
        max = Math.max(max, subarraysum)

    }
    return max
};