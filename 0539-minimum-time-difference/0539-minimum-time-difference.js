/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function (timePoints) {
    for (let i = 0; i < timePoints.length; i++) {
        let [first, end] = timePoints[i].split(':')
        first = parseInt(first)
        end = parseInt(end)
        first = first * 60
        first = first + end
        timePoints[i] = first
    }
    timePoints = timePoints.sort((a, b) => a - b)
    let min = Infinity
    for (let i = 0; i < timePoints.length - 1; i++) {
        min = Math.min(min, timePoints[i + 1] - timePoints[i])
    }
    min = Math.min(min, 24 * 60 - timePoints[timePoints.length - 1] + timePoints[0])
    return min
};