/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    let set = new Set()
    candidates = candidates.sort((a, v) => a - v)
    var again = function (start, sum, arr) {
        if (sum == target) {
            let key = JSON.stringify(arr)
            if (!set.has(key)) {
                set.add(key)
                return
            }
        }
        let prev = -1
        for (let i = start; i < candidates.length; i++) {
            if (sum + candidates[i] <= target) {
                if (prev == candidates[i]) continue

                if (sum + candidates[i] > target) break;
                arr.push(candidates[i])
                again(i + 1, sum + candidates[i], arr)
                arr.pop()
                prev = candidates[i]
            }
        }
    }
    again(0, 0, [])
    return Array.from(set).map(value => JSON.parse(value))
};