/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    // let l = 0
    // let w = 0
    // arr = []
    // res = 0
    // for (let i = 0; i < height.length; i++) {
    //     if (height[i] > l) {
    //         l = Math.max(l, height[i])
    //         arr.push([l, i])
    //     }
    //     w = Math.abs(arr[arr.length - 1][1] - i)
    //     let value_at_index = height[i]
    //     let area = (l - (l - value_at_index)) * w
    //     if (area > res) {
    //         res = area
    //     }
    // }
    // return res

    let l = 0
    let r = height.length - 1
    let res = 0
    while (l < r) {
        let h = Math.min(height[l], height[r])
        res = Math.max(res, h * (r - l))
        if (height[l] <= height[r]) {
            l++
        }
        else {
            r--
        }
    }
    return res
};