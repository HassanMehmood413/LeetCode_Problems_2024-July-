/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var addedInteger = function (nums1, nums2) {

    let first = Math.min(...nums1)
    let second = Math.min(...nums2)
    if (first < second) {
        a = Math.abs(Math.min(first - second))
    }
    else {
        a = Math.min(second - first)
    }
    return a

};