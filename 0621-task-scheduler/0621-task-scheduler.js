/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
    let x = 0
    let fcount = 0
    let totaljobs = tasks.length
    let map = new Map()
    let max = 0
    tasks.forEach((value) => {
        map.set(value, (map.get(value) || 0) + 1);
        max = Math.max(max, map.get(value))
    })
    for (let [a, b] of map) {
        if (max == b) {
            fcount++
        }
    }
    return Math.max((n + 1) * (max - 1) + fcount, totaljobs)
};