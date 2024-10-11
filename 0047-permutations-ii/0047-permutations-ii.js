/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    let res = []
    nums.sort((a, b) => a - b)
    var again = function (nums, arr, res, used) {
        if (arr.length == nums.length) {
            res.push([...arr])
            return
        }
        for (let i = 0; i < nums.length; i++) {
            if (i > 0 && nums[i] == nums[i - 1] && !used[i - 1]) {
                continue
            }
            if (!used[i]) {
                used[i] = true
                arr.push(nums[i])
                console.log(arr)
                again(nums, arr, res,used)
                arr.pop()
                used[i] = false
            }
        }

    }
    again(nums, [], res, new Array(nums.length).fill(false))
    return res
};