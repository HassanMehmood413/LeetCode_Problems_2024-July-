/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function (nums) {
    let arr = []
    while (nums.length > 0) {
        let two = []
        for (let i = 0; i < nums.length; i++) {
            if (!two.includes(nums[i])) {
                two.push(nums[i])
                nums.splice(i, 1)
                i--
            }
        }
        arr.push(two)
    }
    return arr

};