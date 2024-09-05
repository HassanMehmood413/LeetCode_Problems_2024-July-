/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let copy = [...strs]
    for (let i = 0; i < strs.length; i++) {
        copy[i] = copy[i].split('').sort().join("")
    }
    let map = new Map()
    copy.forEach((value, index) => {
        if (!map.has(value)) {
            map.set(value, []);
        }
        map.get(value).push(strs.at(index));
    });
    let array = Array.from(map.values())
    return array

};