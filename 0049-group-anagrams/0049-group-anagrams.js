/**
* @param {string[]} strs
* @return {string[][]}
*/
var groupAnagrams = function (strs) {
    let copy = [];
    let anagram = new Map()
    let result = []
    for (let i = 0; i < strs.length; i++) {
        let key = strs[i].split("").sort().join("")
        if (!anagram.has(key)) {
            anagram.set(key, [])
        }
        anagram.get(key).push(strs[i])
    }
    for (let [key, value] of anagram) {
        result.push(value)
    }
    return result
};
