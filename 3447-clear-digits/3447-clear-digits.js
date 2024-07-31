/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function (s) {
    s = s.split('')
    let stack = []
    for (let i = 0; i < s.length; i++) {
        if (stack.length == 0) {
            stack.push(s[i])
        }
        else if (isNaN(Number(s[i]))) {
            stack.push(s[i])
        }
        else if (!isNaN(Number(s[i])) && isNaN(stack[stack.length - 1])) {
            stack.pop()
        }
    }
    return stack.join('')
};