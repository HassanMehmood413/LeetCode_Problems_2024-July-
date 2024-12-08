/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {
    let arr = []
    let ans = ''
    fact = 1
    for (let i = 1; i < n; i++) {
        fact = fact * i
        arr.push(i)
    }
    arr.push(n)
    k = k - 1
    while (arr.length > 0) {
        let index = Math.floor(k / fact)
        ans = ans + String(arr[index])
        arr.splice(index, 1)
        if (!arr) break
        k = k % fact
        fact = Math.floor(fact / arr.length)
    }
    return ans
};