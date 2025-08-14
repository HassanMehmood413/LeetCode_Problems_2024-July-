/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let first = nums1.length - 1
    let second = 0

    while (first >= 0 && second < nums2.length) {
        if (nums1[first] == 0) {
            nums1[first] = nums2[second]
            second++
        }
        first--
    }
    nums1.sort((a, b) => a - b)


};