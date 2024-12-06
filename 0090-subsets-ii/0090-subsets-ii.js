/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
    let arr = []
    let set = new Set()
    nums = nums.sort((a, b) => a - b)
    var again = function (i) {
        if (i >= nums.length) {
            let key = JSON.stringify(arr);
            if (!set.has(key)) {
                set.add(key)
            }
            return
        }

        arr.push(nums[i])
        again(i + 1)
        arr.pop()
        again(i + 1)
    }
    again(0)
    return Array.from(set).map(item => JSON.parse(item));

};