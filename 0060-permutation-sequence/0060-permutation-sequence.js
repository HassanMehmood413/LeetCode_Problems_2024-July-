/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {
    // This will give TLE

    // let set = new Set()
    // let res = []
    // var again = function (arr, used) {
    //     if (arr.length === n) {
    //         res.push([...arr]);
    //         return
    //     }
    //     for (let i = 1; i <= n; i++) {
    //         if (used.has(i)) continue
    //         used.add(i)
    //         arr.push(i)
    //         again(arr, used)
    //         arr.pop()
    //         used.delete(i)
    //     }
    // }
    // again([], new Set())
    // return res[k - 1].join("")


    let fact = 1
    let arr = []
    let ans = ''
    for (let i = 1; i < n; i++) {
        fact = fact * i
        arr.push(i)
    }
    arr.push(n)
    k = k - 1
    while (arr.length > 0) {
        let index = Math.floor(k / fact)
        ans += String(arr[index])
        arr.splice(index, 1)
        if (!arr) break
        k = k % fact
        fact = Math.floor(fact / arr.length)
    }
    return ans
}
