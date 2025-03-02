/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function (nums1, nums2) {
    // let final = []
    // let i = 0, j = 0
    // while (i < nums1.length || j < nums2.length) {
    //     if (nums[i][0] <= nums[j][0]) {
    //         final.push(nums[i])

    //     }
    // }

    let map = new Map()
    let concat = nums1.concat(nums2)
    for (let i = 0; i < concat.length; i++) {
        if (map.has(concat[i][0])) {
            map.set(concat[i][0], map.get(concat[i][0]) + concat[i][1])
        }
        else {
            map.set(concat[i][0], concat[i][1])
        }
    }
    let result = [...map.entries()].sort((a, b) => a[0] - b[0])
    return result
};