/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let secondArray = nums;
    let ans = nums
    ans = ans.concat(secondArray)
    return ans
};