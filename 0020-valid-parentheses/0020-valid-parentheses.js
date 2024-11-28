/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let stack = []
    let st = "([{"
    if(s.length % 2 !== 0) return false
    for (let i = 0; i < s.length; i++) {
        let char = s[i]

        if (st.includes(char)) {
            stack.push(s[i])
        }
        else {
            if (stack.length == 0) return false

            let top = stack.pop()

            if ((top !== '(' && char == ')') || (top !== '[' && char == ']') || (top !== '{' && char == '}')) {
                return false
            }
        }
    }
    return stack.length == 0
};