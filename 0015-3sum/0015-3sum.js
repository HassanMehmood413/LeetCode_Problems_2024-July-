/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    // nums = nums.sort((a, b) => (a - b))

    // let arr = []
    // for (let i = 0; i < nums.length; i++) {
    //     if (i > 0 && nums[i] === nums[i - 1]) {
    //         continue;
    //     }
    //     j = i + 1
    //     k = nums.length - 1
    //     while (j < k) {
    //         total = nums[i] + nums[j] + nums[k]
    //         if (total > 0) {
    //             k--
    //         }
    //         else if (total < 0) {
    //             j++
    //         }
    //         else {
    //             arr.push([nums[i], nums[j], nums[k]])
    //             j++
    //             while (nums[j] === nums[j - 1] && j < k) {
    //                 j++
    //             }
    //         }
    //     }
    // }
    // return arr


    // PT:
    nums.sort((a, b) => a - b)
    let sum = 0
    let arr = []
    for (let a = 0; a < nums.length; a++) {
        if (a > 0 && nums[a] == nums[a - 1]) {
            continue
        }
        let b = a + 1
        let c = nums.length - 1
        while (b < c) {
            sum = nums[a] + nums[b] + nums[c]
            if (sum < 0) {
                b++
            }
            else if (sum > 0) {
                c--
            }
            else {
                arr.push([nums[a], nums[b], nums[c]])
                b++
                while (b < c && nums[b] == nums[b - 1]) {
                    b++
                }
            }
        }
    }
    return arr

};