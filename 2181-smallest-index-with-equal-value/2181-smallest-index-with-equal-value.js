/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestEqual = function (nums) {
    let arr = []
    for (let i = 0; i <= nums.length - 1; i++) {
        if (i % 10 == nums[i]) {
            arr.push(i)
        }
    }
    if (arr.length > 0) {
        return Math.min(...arr)
    }
    else{
        return -1
    }
};