/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {

    let arr = []
    intervals = intervals.sort((a, b) => a[0] - b[0])
    for (let i = 0; i < intervals.length; i++) {
        if (arr.length == 0) {
            arr.push(intervals[i])
        }
        else if (intervals[i][0] <= arr[arr.length - 1][1]) {
            let first = intervals[i][0]
            let second = arr[arr.length - 1][0]
            let third = intervals[i][1]
            let fourth = arr[arr.length - 1][1]
            arr.pop()
            arr.push([Math.min(first, second), Math.max(third, fourth)])
        }
        else {
            arr.push(intervals[i])
        }
    }
    return arr
}