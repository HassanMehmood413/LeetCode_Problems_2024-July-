/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    // let map = new Map()
    // nums.forEach((value) => {
    //     if (map.has(value)) {
    //         map.set(value, map.get(value) + 1)
    //     }
    //     else {
    //         map.set(value, 1)
    //     }
    // })
    // for (let [value, index] of map) {
    //     if (index > 1) return true
    // }
    // return false

    let set = new Set()
    for (let i = 0; i < nums.length; i++){
        if(set.has(`${nums[i]}`)){
            return true
        }
        set.add(`${nums[i]}`)
    }
    return false
};