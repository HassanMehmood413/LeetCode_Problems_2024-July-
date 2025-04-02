/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumTripletValue = function (nums) {
    let max = 0
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            for (let k = 0; k < nums.length; k++) {
                if ((i < j) && (j < k) && (i < k)) {
                    let val = (nums[i] - nums[j]) * nums[k]
                    max = Math.max(val, max)
                }
            }
        }
    }
    return max
};