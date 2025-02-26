/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAbsoluteSum = function (nums) {
    let prefixsum = 0, l_neg_sum = 0, h_pos_sum = 0, max = 0
    for (let i = 0; i < nums.length; i++) {
        prefixsum += nums[i]
        h_pos_sum = Math.max(h_pos_sum, prefixsum)
        l_neg_sum = Math.min(l_neg_sum, prefixsum)
        max = Math.max(max, Math.abs(prefixsum - h_pos_sum), Math.abs(prefixsum - l_neg_sum))
        // if (prefixsum < 0) {
        //     h_pos_sum = prefixsum - h_pos_sum
        // }
        // else if (prefixsum > 0) {
        //     l_neg_sum = prefixsum - l_neg_sum
        // }
    }
    return max
};