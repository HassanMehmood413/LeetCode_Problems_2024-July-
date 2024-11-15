/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
    let stack = []
    let i = 0
    let j = 0
    while (j < popped.length) {
        if (stack[stack.length - 1] == popped[j]) {
            stack.pop()
            j++
        }
        else if (i > pushed.length) {
            break
        }
        else {
            stack.push(pushed[i])
            i++
        }
    }
    return stack.length == 0
};