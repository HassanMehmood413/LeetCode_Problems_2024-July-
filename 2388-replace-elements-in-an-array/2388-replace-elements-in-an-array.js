/**
 * @param {number[]} nums
 * @param {number[][]} operations
 * @return {number[]}
 */
var arrayChange = function (nums, operations) {
    // Includes,index increase the complexity to 0(n2):
    // let j = 0
    // let include = 0
    // let not = 1
    // i = 0
    // while (j <= operations.length - 1) {
    //     if (nums.includes(operations[j][include]) && !nums.includes(operations[j][not])) {
    //         let index = nums.indexOf(operations[j][include])
    //         nums[index] = operations[j][not]

    //     }
    //     j++
    //     i++
    // }
    // return nums

    //Using map:
    let include = 0
    let not = 1
    let map = new Map()
    nums.forEach((num, index) => map.set(num, index));
    for (let j = 0; j < operations.length; j++) {
        let includevalue = operations[j][include]
        notvalue = operations[j][not]
        if (map.has(includevalue) && !map.has(notvalue)) {
            let index = map.get(includevalue)
            map.delete(includevalue)
            map.set(notvalue, index)
            nums[index] = notvalue
        }
    }
    return nums
};