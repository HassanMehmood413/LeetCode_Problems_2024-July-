/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1]
    }
    let m = nums1.length
    let n = nums2.length

    let low = 0
    let high = m
    while (low <= high) {
        let mid1 = Math.floor((low + high) / 2)
        let mid2 = Math.floor((n + m + 1) / 2) - mid1

        let l1 = mid1 == 0 ? -Infinity : nums1[mid1 - 1]
        let r1 = mid1 == m ? Infinity : nums1[mid1]
        let l2 = mid2 == 0 ? -Infinity : nums2[mid2 - 1]
        let r2 = mid2 == n ? Infinity : nums2[mid2]


        if (l1 <= r2 && l2 <= r1) {
            if ((n + m) % 2 == 1) {
                return Math.max(l1, l2)
            }
            else {
                return (Math.max(l1, l2) + Math.min(r1, r2)) / 2
            }
        }

        if (l1 > r2) {
            high = mid1 - 1
        }
        else {
            low = mid1 + 1
        }
    }

}