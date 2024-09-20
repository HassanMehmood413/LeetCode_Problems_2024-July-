/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
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
        while (i +1 < nums.length && nums[i] == nums[i + 1]) {
            i++
        }
        again(i + 1)
    }
    again(0)
    return res
};