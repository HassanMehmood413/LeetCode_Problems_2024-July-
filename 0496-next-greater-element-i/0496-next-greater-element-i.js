/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    for (let i = 0; i < nums1.length; i++) {
        let a = nums1[i]
        let res = find(nums2, a)
        nums1[i] = res
    }
    return nums1
};
var find = function (nums2, a) {
    index = nums2.indexOf(a)
    if (index == nums2.length - 1) return -1
    let arr = nums2.slice(index, nums2.length)
    let i = 0
    while (i < arr.length) {
        if (arr[i] > nums2[index]) {
            return arr[i]
        }
        i++
    }
    return -1
}