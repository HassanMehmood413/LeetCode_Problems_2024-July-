/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    if (nums.length == 0) return 0
    let nums_set = new Set(nums)
    let max_count = 0
    for (let i of nums_set) {
        if (!nums_set.has(i - 1)) {
            max_count = Math.max(max_count, check_count(i, nums_set));
        }
    }
    return max_count
};

var check_count = function (num, nums_set) {
    let count = 0
    while (nums_set.has(num)) {
        num = num + 1
        count++
    }
    return count

}