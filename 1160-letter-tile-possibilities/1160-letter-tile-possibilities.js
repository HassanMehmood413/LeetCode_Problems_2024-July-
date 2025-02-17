/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function (tiles) {

    tiles = tiles.split('').sort()
    let result = new Set()
    let used = new Array(tiles.length).fill(false)

    var again = function (start) {
        if (start.length > 0) {
            result.add(start.join(''))
        }

        for (let i = 0; i < tiles.length; i++) {
            if (used[i] || (i > 0 && tiles[i] == tiles[i - 1] && !used[i - 1])) continue
            used[i] = true
            start.push(tiles[i])
            again(start)
            start.pop()
            used[i] = false

        }
    }
    again([])
    return result.size
};