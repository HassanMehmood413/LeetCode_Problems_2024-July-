/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let stack = []
    let str = '([{'
    if (s.length % 2 != 0) return false
    for (let i = 0; i < s.length; i++) {
        let first = s[i]
        if (str.includes(first)) {
            stack.push(first)
        }
        else {
            if (stack.length == 0) return false
            let top = stack.pop()
            if (top == '(' && first !== ')' || top == '[' && first != ']' || top == '{' && first != '}') return false
        }
    }
    return stack.length == 0
};