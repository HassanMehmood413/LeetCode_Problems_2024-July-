/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
    let map = new Map()
    let count = 0
    let max = 0
    tasks.forEach((value) => {
        map.set(value, (map.get(value) || 0) + 1)
        max = Math.max(max, map.get(value))
    })
    for (let [a, v] of map) {
        if (max == v) {
            count++
        }
    }
    return Math.max((n + 1) * (max - 1) + count, tasks.length)
};