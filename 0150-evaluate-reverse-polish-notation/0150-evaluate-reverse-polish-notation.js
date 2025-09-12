/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    let i = 0
    let stack = []
    while (i < tokens.length) {
        let el = tokens[i]

        if (el == '+') {
            let first = Number(stack.pop())
            let second = Number(stack.pop())

            let add = first + second
            stack.push(add)
        }
        else if (el == '-') {
            let first = Number(stack.pop())
            let second = Number(stack.pop())

            let add = second - first
            stack.push(add)
        }
        else if (el == '/') {
            let first = Number(stack.pop())
            let second = Number(stack.pop())

            let add = Math.trunc(second / first)
            stack.push(add)
        }
        else if (el == '*') {
            let first = Number(stack.pop())
            let second = Number(stack.pop())

            let add = first * second
            stack.push(add)
        }
        else {
            stack.push(el)
        }
        i++
    }
    return Number(stack.pop())
};