/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
    let stack = []
    let output = new Array(temperatures.length).fill(0)
    stack.push(0)
    for (let i = 1; i < temperatures.length; i++) {
        while (stack.length > 0 && temperatures[stack[stack.length - 1]] < temperatures[i]) {
            let index = stack.pop()
            output[index] = i - index
        }
        stack.push(i)

    }

    return output

};