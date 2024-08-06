/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var addedInteger = function (nums1, nums2) {
    nums1.sort((a, b) => b - a)
    nums2.sort((a, b) => b - a)
    if (nums1[0] < nums2[0]) {
        a = Math.abs(Math.min(...nums1) - Math.min(...nums2))
    }
    else {
        a = (Math.min(...nums2) - Math.min(...nums1))
    }
    return a

};