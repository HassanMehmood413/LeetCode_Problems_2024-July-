/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
    intervals.sort((a, b) => a[1] - b[1]);
    let count = 0
    let max = intervals[0][1]
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] < max) {
            count++
        }

        else {
            max = Math.max(max,intervals[i][1])
        }
    }
    return count
};