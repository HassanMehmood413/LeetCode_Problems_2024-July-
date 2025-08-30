/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
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