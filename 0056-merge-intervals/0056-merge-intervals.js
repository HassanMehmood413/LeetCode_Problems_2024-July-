/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    intervals = intervals.sort((a, b) => a[0] - b[0]);
    let arr = []
    for (let i = 0; i <= intervals.length - 1; i++) {
        if (arr.length == 0) {
            arr.push(intervals[i])
        }
        else if (intervals[i][0] <= arr[arr.length - 1][1]) {
            a = Math.min(intervals[i][1], arr[arr.length - 1][0])
            b = Math.max(intervals[i][1], arr[arr.length - 1][1])
            arr.pop()
            arr.push([a, b])
        }
        else {
            arr.push(intervals[i])
        }
    }
    return arr
};