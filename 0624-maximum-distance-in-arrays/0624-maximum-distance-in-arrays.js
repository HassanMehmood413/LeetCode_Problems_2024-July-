/**
 * @param {number[][]} arrays
 * @return {number}
 */
var maxDistance = function (arrays) {
    let min = arrays[0][0]
    let max = arrays[0][arrays[0].length - 1]
    let maxdiff = 0
    for (let i = 1; i < arrays.length; i++) {
        let first_diff = arrays[i][arrays[i].length - 1] - min
        let second_diff = max - arrays[i][0]
        maxdiff = Math.max(maxdiff, first_diff, second_diff)

        min = Math.min(min, arrays[i][0])
        max = Math.max(max, arrays[i][arrays[i].length - 1])

    }
    return maxdiff


};