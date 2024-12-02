/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
    let stack = []
    let max = 0
    for (let i = 0; i < heights.length; i++) {
        let l = 0
        while (stack.length > 0 && heights[i] < stack[stack.length - 1][1]) {
            let [a, b] = stack.pop()
            let width = stack.length == 0 ? i : i - stack[stack.length - 1][0] - 1
            max = Math.max(max, b * width)
        }
        stack.push([i, heights[i]])

    }
    while (stack.length > 0) {
        let [a, b] = stack.pop()
        let width = stack.length == 0 ? heights.length : heights.length - stack[stack.length - 1][0] - 1
        max = Math.max(max, b * width)
    }
    return max
};