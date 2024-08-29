/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function (s) {
    // My Method : 0(n2)
    // s = s.split("")
    // let stack = []
    // let arr = []
    // let k = 1
    // let first = -1
    // let open = 0
    // for (let i = 0; i < s.length; i++) {
    //     if (s[i] == '(') {
    //         stack.push(s[i])
    //         open++
    //     }
    //     else if (s[i] == ')') {

    //         while (stack.length > 0 && stack[stack.length - k] != '(') {
    //             arr.push(stack.pop())
    //         }
    //         stack.pop()
    //         while (arr.length > 0) {
    //             stack.push(arr.shift())
    //         }
    //         open--

    //     }
    //     else {
    //         stack.push(s[i])
    //     }
    // }
    // return stack.join("")


    // New Method: 0(n)
    s = s.split("")
    let stack = []
    for (let i = 0; i < s.length; i++) {
        let substring = []
        if (s[i] == ')') {

            while (stack.length > 0 && stack[stack.length - 1] != '(') {
                substring.push(stack.pop())
            }
            stack.pop()
            stack.push(...substring)

        }
        else {
            stack.push(s[i])
        }
    }
    return stack.join("")
};