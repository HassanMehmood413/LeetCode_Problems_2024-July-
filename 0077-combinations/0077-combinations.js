/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    let arr = []
    let res = []
    var again = function (start) {
        if (arr.length == k) {
            res.push([...arr])
            return
        }
        for (let i = start; i <= n; i++){
            arr.push(i)
            again(i+1)
            arr.pop()
        }
    }
    again(1)
    return res
};