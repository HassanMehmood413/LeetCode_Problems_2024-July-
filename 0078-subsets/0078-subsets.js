/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    let arr = []
    let subset = []
    const again = (i) => {
        if (i >= nums.length) {
            arr.push([...subset])
            return arr
        }
        subset.push(nums[i])
        again(i+1)
        subset.pop()
        again(i+1)

    }
    again(0)
    return arr
};