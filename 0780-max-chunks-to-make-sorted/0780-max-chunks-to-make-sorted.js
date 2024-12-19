/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function (arr) {
    let max = 0
    let chunk = 0
    for (let i = 0; i < arr.length; i++) {
        max = Math.max(max, arr[i])
        if(max == i) chunk++
    }
    return chunk
};