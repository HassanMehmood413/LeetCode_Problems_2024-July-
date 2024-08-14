/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (a) {
    let array = Array(a.length).fill(-1)
    let n = a.length
    let stack = []
    let k = 0
    for (let i = 0; i < 2 * n; i++) {
        let index = i % n
        while (stack.length > 0 && a[stack[stack.length - 1]] < a[index]) {
            array[stack.pop()] = a[index]
        }
        if (i < n) {
            stack.push(index);
        }

    }
    return array
};