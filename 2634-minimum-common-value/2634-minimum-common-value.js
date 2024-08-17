/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function (nums1, nums2) {
    let map = new Set(nums1)
    for (let i = 0; i <= nums2.length - 1; i++) {
        if (map.has(nums2[i])) {
            return nums2[i]
        }
    }
    return -1


};