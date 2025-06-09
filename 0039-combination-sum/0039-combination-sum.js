/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    // // let res = []
    // // var again = function (i, sum, arr) {
    // //     if (sum == target) {
    // //         res.push([...arr])
    // //         return
    // //     }

    // //     for (let j = i; j < candidates.length; j++) {
    // //         if (sum + candidates[j] <= target) {
    // //             arr.push(candidates[j])
    // //             again(j, sum + candidates[j], arr)
    // //             arr.pop()
    // //         }
    // //     }
    // // }
    // // again(0, 0, [])
    // // return res


    // let res = []
    // var again = function (index, arr, sum) {
    //     if (target == sum) {
    //         res.push([...arr])
    //         return
    //     }
    //     if (sum > target) return
    //     for (let i = index; i < candidates.length; i++) {
    //         arr.push(candidates[i])
    //         again(i, arr, sum + candidates[i])
    //         arr.pop()
    //     }
    // }
    // again(0, [], 0)
    // return res





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