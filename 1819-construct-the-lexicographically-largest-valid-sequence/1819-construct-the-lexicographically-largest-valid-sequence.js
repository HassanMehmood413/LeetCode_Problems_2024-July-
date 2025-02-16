/**
 * @param {number} n
 * @return {number[]}
 */
var constructDistancedSequence = function (n) {
    let len = n * 2 - 1
    let new_arr = new Array(len).fill(0)
    let set = new Set()
    var backtrack = function (i) {
        if (i == len) { return true }

        if (new_arr[i] != 0) return backtrack(i + 1)

        for (let j = n; j >= 1; j--) {
            if (set.has(j)) {
                continue
            }
            if (j > 1 && (i + j >= len || new_arr[i + j] != 0)) {
                continue
            }
            set.add(j)
            new_arr[i] = j
            if (j > 1) {
                new_arr[i + j] = j
            }

            // let k = i + 1
            // while (k > new_arr.length && new_arr[k]) {
            //     k = k + 1
            // }

            if (backtrack(i + 1)) {
                return true
            }

            set.delete(j)
            new_arr[i] = 0
            if (j > 1) {
                new_arr[i + j] = 0
            }

        }

    }
    backtrack(0)
    return new_arr
};