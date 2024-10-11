/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    let res = []
    let set = new Set()
    nums.sort((a, b) => a - b)
    var again = function (nums, arr, res, set) {
        if (arr.length == nums.length) {
            res.push([...arr])
            return
        }
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] == nums[i - 1] && !set.has(i - 1)) {
                continue
            }
            if (set.has(i)) {
                continue
            }

            arr.push(nums[i])
            set.add(i)
            console.log(arr)
            again(nums, arr, res, set)
            arr.pop()
            set.delete(i)
        }

    }
    again(nums, [], res, set)
    return res
};