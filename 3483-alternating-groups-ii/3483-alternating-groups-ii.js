/**
 * @param {number[]} colors
 * @param {number} k
 * @return {number}
 */
var numberOfAlternatingGroups = function (colors, k) {
    // let copy = colors.concat(colors)
    // console.log(copy)
    // let count = 0
    // let res = []
    // let left = 0
    // let i = 0
    // while (left < copy.length && i < copy.length) {
    //     if (res.length == k) count++
    //     if (copy[i] == res[res.length - 1]) {
    //         res = []
    //         left++
    //         i = left
    //         continue
    //     }
    //     res.push(copy[i])
    //     i++
    // }
    // return count

    colors.push(...colors.slice(0, k - 1));
    let count = 0
    let left = 0
    for (let right = 0; right < colors.length; right++) {
        if (right > 0 && colors[right] == colors[right - 1]) {
            left = right
        }
        if (right - left + 1 >= k) {
            count++
        }
    }
    return count

};