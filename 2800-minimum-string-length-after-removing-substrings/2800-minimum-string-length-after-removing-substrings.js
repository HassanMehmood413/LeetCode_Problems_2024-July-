/**
 * @param {string} s
 * @return {number}
 */
var minLength = function (s) {

    let stack = []
    for (let i = 0; i < s.length; i++) {
        stack.push(s[i])
        let a = stack[stack.length - 1]
        let b = stack[stack.length - 2]
        let res = `${b}${a}`
        if (res == "AB" || res == 'CD') {
            stack.pop()
            stack.pop()
        }

    }
    return stack.length  // Output the final stack after all possible reductions

};