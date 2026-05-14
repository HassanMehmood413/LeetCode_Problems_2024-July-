/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    let dup_chk = nums

    // cannot use loop, 
    // cannot use include, it also checks whole array
    // sort > n(log n) with o1 space
    // dup_chk = dup_chk.sort((a, b) => a - b)
    // console.log(dup_chk)

    // for (let i = 0; i < dup_chk.length - 1; i++) {
    //     if (dup_chk[i] == dup_chk[i + 1]) {
    //         return true
    //     }
    // }
    // return false

    // 2. in case of using hashmap
    let dup_map = new Map()

    for (let value of nums) {
        if (dup_map.has(value)) {
            return true
        }
        dup_map.set(value, 1)
    }

    return false


};