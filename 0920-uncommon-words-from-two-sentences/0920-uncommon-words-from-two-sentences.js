/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function (s1, s2) {
    let map = new Map()
    s1 = s1.split(" ")
    s2 = s2.split(" ")
    s1.forEach(element => {
        if (map.has(element)) {
            map.set(element, map.get(element) + 1)
        }
        else {
            map.set(element, 1)
        }
    });
    s2.forEach(element => {
        if (map.has(element)) {
            map.set(element, map.get(element) + 1)
        }
        else {
            map.set(element, 1)
        }
    });
    let arr = []
    for (let [key, value] of map) {
        if (value == 1) {
            arr.push(key)
        }
    }
    return arr

};