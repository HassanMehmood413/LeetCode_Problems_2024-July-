/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    // complexity : 0(n*m2)

    // let indices = []
    // for (let i = 0; i < nums1.length; i++) {
    //     let index = nums2.indexOf(nums1[i])
    //     indices.push(index)
    // }
    // let b;
    // let max = -1
    // for (let i = 0; i < indices.length; i++) {
    //     let a = indices[i]
    //     let comp = nums2[a]
    //     for (let j = a; j < nums2.length; j++) {
    //         b = nums2[j]
    //         if (b > comp) {
    //             max = b
    //             break
    //         }
    //         else {
    //             max = -1
    //         }
    //     }
    //     if (max < comp) {
    //         nums1[i] = -1
    //     }
    //     else {
    //         nums1[i] = max
    //     }
    // }
    // return nums1

    // Efficient Complexity: 0(n * m):
    let map = new Map()
    let stack = []
    for (let num of nums2) {
        while (stack.length > 0 && stack[stack.length - 1]<num){
            map.set(stack.pop(),num)
        }
        stack.push(num)
    }
    return nums1.map((num)=>map.get(num)||-1)


};