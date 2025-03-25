/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
    let stack = []
    let i = 0
    let j = 0
    while (i < pushed.length) {
        let pus = pushed[i]
        stack.push(pus)

        while (j < popped.length && stack[stack.length - 1] == popped[j]) {
            if (stack[stack.length - 1] == popped[j]) {
                stack.pop()
            }
            j++
        }

        i++
    }
    return stack.length == 0
};