/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {
    let arr = []
    let ans = ''
    let fact = 1
    for (let i = 1; i < n; i++) {
        fact = fact * i
        arr.push(i)
    }
    arr.push(n)
    k = k - 1
    while (arr.length > 0) {
        ans += String(arr[Math.floor(k / fact)])
        arr.splice(Math.floor(k / fact), 1)
        if (!arr) {
            break
        }
        k = k % fact
        fact = Math.floor(fact / arr.length)
    }
    return ans
};