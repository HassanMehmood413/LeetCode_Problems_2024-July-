/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    // let res = []
    // var again = function (start, arr) {
    //     if (arr.length == nums.length) {
    //         res.push([...arr])
    //         return
    //     }
    //     for (let i = 0; i < nums.length; i++) {
    //         if (!arr.includes(nums[i])) {
    //             arr.push(nums[i])
    //             again(start + 1, arr)
    //             arr.pop()
    //         }
    //     }
    // }
    // again(0, [])
    // return res


    let res = []
    var again = function (arr, used) {
        if (arr.length == nums.length) {
            res.push([...arr])
        }
        for (let i = 0; i < nums.length; i++) {
            if (used.has(nums[i])) continue
            used.add(nums[i])
            arr.push(nums[i])
            again(arr, used)
            used.delete(nums[i])
            arr.pop()
        }
    }
    again([], new Set())
    return res
};