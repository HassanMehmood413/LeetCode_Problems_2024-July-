/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    let res = []
    var again = function (start, arr) {
        if (arr.length == nums.length) {
            res.push([...arr])
            return
        }
        for (let i = 0; i < nums.length; i++) {
            if (!arr.includes(nums[i])) {
                arr.push(nums[i])
                again(start + 1, arr)
                arr.pop()
            }
        }
    }
    again(0, [])
    return res
};