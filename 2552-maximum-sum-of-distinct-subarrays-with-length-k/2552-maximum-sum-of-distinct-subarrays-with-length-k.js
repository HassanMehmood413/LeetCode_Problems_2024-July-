/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function (nums, k) {
    if (k == 1 && nums.length > 0) return Math.max(...nums)
    let set = new Set()
    let max = 0
    let sum = 0
    let left = 0
    for (let right = 0; right < nums.length; right++) {
        while (set.has(nums[right])) {
            set.delete(nums[left]);
            sum -= nums[left];
            left++;
        }
        set.add(nums[right])
        sum = sum + nums[right]

        while (right - left + 1 > k) {
            sum = sum - nums[left]
            set.delete(nums[left])
            left++
        }
        if (right - left + 1 == k) {
            max = Math.max(max, sum)
        }

    }
    return max
};