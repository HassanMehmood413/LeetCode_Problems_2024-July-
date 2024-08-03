/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function (nums) {
    let count = 0
    let neg = 0
    let pos = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < 0) {
            neg++
        }
        else if (nums[i] > 0) {
            pos++
        }
    }
    if (neg > pos) {
        count = neg
    }
    else {
        count = pos
    }
    return count

};