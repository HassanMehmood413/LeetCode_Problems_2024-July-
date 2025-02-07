/**
 * @param {number} limit
 * @param {number[][]} queries
 * @return {number[]}
 */
var queryResults = function (limit, queries) {
    let map = new Map()
    let colorcount = new Map()
    let result = []
    let count = 1
    for (let [ball, color] of queries) {
        if (map.has(ball)) {
            let prev = map.get(ball)
            colorcount.set(prev, colorcount.get(prev) - 1)
            if (colorcount.get(prev) == 0) {
                colorcount.delete(prev)
            }
        }
        map.set(ball, color)
        colorcount.set(color, (colorcount.get(color) || 0) + 1)
        result.push(colorcount.size)
    }
    return result
};