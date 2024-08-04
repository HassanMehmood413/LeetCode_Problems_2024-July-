/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
    let arr = []
    arr.push(0)
    for (let i = 0; i < gain.length; i++) {
        sub = arr[i] + (gain[i])
        arr.push(sub)
    }
    arr.sort((a, b) => b - a)
    return arr[0]
};