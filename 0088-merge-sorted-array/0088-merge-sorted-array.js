/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let l = 0
    for (let i = nums1.length - 1; i >= 0; i--) {
        if (nums2[l] == undefined) {
            break
        }
        if (nums1[i] == 0) {
            nums1[i] = nums2[l]
            l++
        }
        else {
            break
        }
    }
    nums1 = nums1.sort((a, b) => a - b)
    return nums1.length
};
