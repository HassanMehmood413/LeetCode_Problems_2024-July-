/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    nums = nums.sort((a, b) => a - b)
    let result = []

    for (let a = 0; a < nums.length; a++) {
        if (a > 0 && nums[a] == nums[a - 1]) continue

        for (let b = a + 1; b < nums.length; b++) {
            if (b > a + 1 && nums[b] == nums[b - 1]) continue
            let c = b + 1
            let d = nums.length - 1

            while (c < d) {
                let sum = nums[a] + nums[b] + nums[c] + nums[d]
                if (sum > target) {
                    d--
                }
                else if (sum < target) {
                    c++
                }
                else {

                    result.push([nums[a], nums[b], nums[c], nums[d]])
                    c++
                    d--
                    while (c < d && nums[c] == nums[c - 1]) {
                        c++
                    }

                    while (c < d && nums[d] == nums[d + 1]) {
                        d--
                    }
                }
            }
        }
    }
    return result
};