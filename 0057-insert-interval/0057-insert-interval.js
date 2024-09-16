/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
    let l = []
    let r = []
    for (let i = 0; i < intervals.length; i++) {
        if (intervals[i][1] < newInterval[0]) {
            l.push(intervals[i])
        }
        else if (intervals[i][0] > newInterval[1]) {
            r.push(intervals[i])
        }
        else {
            newInterval = [Math.min(intervals[i][0], newInterval[0]), Math.max(intervals[i][1],     newInterval[1])]
        }
    }
    return [...l, newInterval, ...r]
};