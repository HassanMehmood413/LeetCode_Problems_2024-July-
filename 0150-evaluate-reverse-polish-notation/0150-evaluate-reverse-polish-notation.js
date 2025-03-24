/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    let stack = []
    for (let i = 0; i < tokens.length; i++) {
        let el = tokens[i]

        if (el == '+') {
            let first = stack.pop()
            let second = stack.pop()
            let sum = Number(first) + Number(second)
            stack.push(sum)
        }
        else if (el == '-') {
            let first = stack.pop()
            let second = stack.pop()
            let neg = Number(second) - Number(first)
            stack.push(neg)
        }
        else if (el == '*') {
            let first = stack.pop()
            let second = stack.pop()
            let mul = Number(first) * Number(second)
            stack.push(mul)
        }
        else if (el == '/') {
            let first = stack.pop()
            let second = stack.pop()
            let div = Math.trunc(Number(second) / Number(first))
            stack.push(div)
        }
        else {
            stack.push(el)
        }
    }
    return Number(stack[0])
};