/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    let res = []
    nums = nums.sort()
    var again = function (arr, res, map) {
        if (arr.length == nums.length) {
            res.push([...arr])
            return
        }
        for (let i = 0; i < nums.length; i++) {
            if (i > 0 && nums[i] == nums[i - 1] && !map.has(i - 1)) continue
            if (map.has(i)) continue
            arr.push(nums[i])
            map.add(i)
            again(arr, res, map)
            arr.pop()
            map.delete(i)
        }
    }
    again([], res, new Set())
    return res
};