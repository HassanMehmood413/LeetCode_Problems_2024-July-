/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
    let max = 0
    let count = 0
    let map = new Map()
    tasks.map((value) => {
        if (map.has(value)) {
            map.set(value, map.get(value) + 1)
            max = Math.max(map.get(value), max)
        }
        else {
            map.set(value, 1)
        }
    })
    for (let [value, key] of map.entries()) {
        if (max == key) {
            count++
        }
    }
    return Math.max((n + 1) * (max - 1) + count, tasks.length)
};