/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
    // let arr = []
    // let set = new Set()
    // nums = nums.sort((a, b) => a - b)
    // var again = function (i) {
    //     if (i >= nums.length) {
    //         let key = JSON.stringify(arr);
    //         if (!set.has(key)) {
    //             set.add(key)
    //         }
    //         return
    //     }

    //     arr.push(nums[i])
    //     again(i + 1)
    //     arr.pop()
    //     again(i + 1)
    // }
    // again(0)
    // return Array.from(set).map(item => JSON.parse(item));


    nums.sort((a, b) => a - b)
    let res = []
    let subset = []
    var again = function (i) {
        if (i >= nums.length) {
            res.push([...subset])
            return res
        }
        subset.push(nums[i])
        again(i + 1)
        subset.pop()
        while (i + 1 < nums.length && nums[i] == nums[i + 1]) {
            i++
        }
        again(i + 1)
    }
    again(0)
    return res

};