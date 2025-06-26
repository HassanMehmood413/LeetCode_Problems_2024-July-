/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    candidates.sort((a, b) => a - b)
    let set = new Set()
    let res = []
    var again = function (start, arr, sum) {
        let key = JSON.stringify(arr)
        if (sum == target && !set.has(key)) {
            set.add(key)
            res.push([...arr])
        }

        for (let i = start; i < candidates.length; i++) {
            if (sum + candidates[i] <= target) {
                if (i > start && candidates[i] == candidates[i - 1]) continue
                arr.push(candidates[i])
                again(i + 1, arr, sum + candidates[i])
                arr.pop()
            }
        }
    }
    again(0, [], 0)
    return res

};