/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let stack = []
    let starting = "([{"
    if (s.length % 2 !== 0) return false
    let i = 0
    while (i < s.length) {
        let first = s[i]
        if (starting.includes(first)) {
            stack.push(first)
        }
        else {
            if (stack.length == 0) return false
            let top = stack.pop()

            if ((top == '(' && first !== ')') || (top == '[' && first !== ']') || (top == '{' && first !== '}')) {
                return false
            }
        }
        i++
    }
    return stack.length == 0
};