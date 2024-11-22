/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
    let map = new Map()
    nums.forEach((value) => {
        if (map.has(value)) {
            map.set(value, map.get(value) + 1)
        }
        else {
            map.set(value, 0)
        }
    })
    for(let [value,index] of map){
        if(index > 0){
            return value
        }
    }
};