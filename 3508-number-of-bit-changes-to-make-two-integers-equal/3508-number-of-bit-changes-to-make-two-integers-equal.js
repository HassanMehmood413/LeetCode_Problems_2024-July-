/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var minChanges = function (n, k) {
    if ((n & k) !== k) {
        return -1
    }
    let res = 0
    for (const i of n.toString(2)) {
        res += parseInt(i)
    }
    for (const i of k.toString(2)) {
        res -= parseInt(i)
    }
    return res
};