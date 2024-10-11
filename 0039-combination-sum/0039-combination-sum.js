/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    let res = []
    var again = function (arr, res, sum, start) {
        if (sum == target) {
            res.push([...arr])
            return
        }
        for (let i = start; i < candidates.length; i++) {
            if (sum + candidates[i] <= target) {
                arr.push(candidates[i])
                again(arr, res, sum + candidates[i], i)
                arr.pop()
            }
        }
    }
    again([], res, 0, 0)
    return res
};