/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
    let stack = []
    for (let i = 0; i < operations.length; i++) {
        if (operations[i] == '+') {
            let sum = stack[stack.length - 1] + stack[stack.length - 2]
            stack.push(sum)
        }
        else if (operations[i] == 'D') {
            let mul = Number(stack[stack.length - 1]) * 2
            stack.push(mul)
        }
        else if (operations[i] == 'C') {
            stack.pop()
        }
        else {
            stack.push(Number(operations[i]))
        }
    }
    let sum2 = stack.reduce((a, c) => a + c, 0)
    return sum2
};