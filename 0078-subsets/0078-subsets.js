/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    let res = []
    var again = function (index, arr) {
        // if (!nums) return []
        res.push([...arr])
        for (let i = index; i < nums.length; i++) {
            arr.push(nums[i])
            again(i + 1, arr)
            arr.pop()
        }
    }
    again(0, [])
    return res
};