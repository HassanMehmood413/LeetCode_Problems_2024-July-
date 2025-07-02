/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    let res = []
    var again = function (start, arr, sum) {
        if (sum == target) {
            res.push([...arr])
            return
        }
        if (sum > target) return
        for (let i = start; i < candidates.length; i++) {
            arr.push(candidates[i])
            again(i, arr, sum + candidates[i])
            arr.pop()
        }
    }
    again(0, [], 0)
    return res
};