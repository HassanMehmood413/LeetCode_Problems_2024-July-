/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    let arr = []
    if (nums == null || nums.length < 4) {
        return arr;
    }
    nums = nums.sort((a, b) => a - b)
    let k = nums.length
    for (let i = 0; i < k - 3; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) {
            continue
        }
        for (let j = i + 1; j < k - 2; j++) {
            if (j > i + 1 && nums[j] == nums[j - 1]) {
                continue
            }
            let l = j + 1
            let k = nums.length - 1
            while (l < k) {
                sum = nums[i] + nums[j] + nums[l] + nums[k]
                if (sum < target) {
                    l++
                }
                else if (sum > target) {
                    k--
                }
                else {
                    arr.push([nums[i], nums[j], nums[l], nums[k]])
                    while (nums[l] === nums[l + 1] && l < k) {
                        l++
                    }
                    while (nums[k] === nums[k - 1] && l < k) {
                        k--
                    }
                    l++
                    k--
                }
            }
        }
    }
    return arr
};