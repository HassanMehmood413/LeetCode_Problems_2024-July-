/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let order = ""
    let map = new Map()
    strs.forEach((value, index) => {
        let check_arr = value.split("")
        order = check_arr.sort().join("")
        if (map.has(order)) {
            map.get(order).push(value)
        }
        else {
            map.set(order, [value])
        }
    })
    let ans = []
    for (let [key, val] of map) {
        ans.push(val)
    }
    return ans
};