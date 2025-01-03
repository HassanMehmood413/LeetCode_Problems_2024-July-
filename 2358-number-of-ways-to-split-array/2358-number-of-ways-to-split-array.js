/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToSplitArray = function (nums) {
    let total_sum = nums.reduce((a, v) => a + v, 0); 
    let pre = 0; 
    let count = 0; 

    for (let i = 0; i < nums.length - 1; i++) { 
        pre += nums[i]; 
        let other = total_sum - pre; 
        if (pre >= other) count++; 
    }

    return count;

};