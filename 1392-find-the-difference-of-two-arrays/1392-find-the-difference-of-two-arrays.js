/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
    let a1 = [], a3 = []
    for (let i = 0; i < nums1.length; i++) {
        if (!nums2.includes(nums1[i])) {
            if (nums1[i] != nums1[i - 1]) {
                a1.push(nums1[i])
            }
        }
    }
    for (let i = 0; i < nums2.length; i++) {
        if (!nums1.includes(nums2[i])) {
            if (nums2[i] != nums2[i - 1]) {
                a3.push(nums2[i])
            }
        }
    } 
    a1 = a1.filter((value, index) => {
        return a1.indexOf(value) == index
    })
    a3 = a3.filter((value, index) => {
        return a3.indexOf(value) == index
    })
    return [a1,a3]

};