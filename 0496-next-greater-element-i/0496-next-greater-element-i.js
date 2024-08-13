/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    // let count = 0
    // let i = 0
    // let j = 0
    // let arr = []
    // while (i <= nums1.length - 1) {


    //     if (nums1[i] == nums2[j]) {
    //         let k = j
    //         while (k <= nums2.length - 1) {
    //             if (nums2[k + 1] > nums2[k]) {
    //                 arr.push(nums2[k + 1])
    //                 count = 0
    //                 break
    //             }
    //             k++;
    //             count++
    //         }

    //     }
    //     if (count > 0) {
    //         arr.push(-1)
    //         count = 0
    //     }
    //     if (j == nums2.length - 1) {
    //         i++
    //     }

    //     if (j == nums2.length - 1) {
    //         j = 0
    //     }
    //     else {
    //         j++
    //     }

    // }
    // return arr

    let indices = []
    for (let i = 0; i < nums1.length; i++) {
        let index = nums2.indexOf(nums1[i])
        indices.push(index)
    }
    let b;
    let max = -1
    for (let i = 0; i < indices.length; i++) {
        let a = indices[i]
        let comp = nums2[a]
        for (let j = a; j < nums2.length; j++) {
            b = nums2[j]
            if (b > comp) {
                max = b
                break
            }
            else {
                max = -1
            }
        }
        if (max < comp) {
            nums1[i] = -1
        }
        else {
            nums1[i] = max
        }
    }
    return nums1

};