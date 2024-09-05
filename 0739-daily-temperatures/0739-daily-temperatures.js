/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
    // Using Only Index
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

    // Using Both [index and Value]
    // let stack = []
    // let output = new Array(temperatures.length).fill(0)
    // stack.push([temperatures[0], 0])
    // for (let i = 1; i < temperatures.length; i++) {
    //     while (stack.length > 0 && stack[stack.length - 1][0] < temperatures[i]) {
    //         index = stack.pop()
    //         let a = index[1]
    //         output[a] = i - a
    //         console.log(index[1])
    //     }
    //     stack.push([temperatures[i], i])

    // }

    // return output

};