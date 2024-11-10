/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    let res = []
    var again = function (nums, arr, res) {
        if (arr.length == nums.length) {
            res.push([...arr])
            return
        }
        for (let i of nums) {
            if (arr.includes(i)) {
                continue
            }
            arr.push(i)
            again(nums, arr, res)
            arr.pop()
        }
    }
    again(nums, [], res)
    return res
};