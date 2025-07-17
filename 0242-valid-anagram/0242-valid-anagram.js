/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    s = s.split("")
    t = t.split("")
    if (s.length !== t.length) return false
    let first_sen = new Map()
    let second_sen = new Map()

    if (s.length !== t.length) return false;


    for (let char of s) {
        first_sen.set(char, (first_sen.get(char) || 0) + 1);
    }

    for (let char of t) {
        second_sen.set(char, (second_sen.get(char) || 0) + 1);
    }

    for (let [key, value] of first_sen) {
        if (!second_sen.has(key)) {
            return false
        }
        else if (second_sen.has(key)) {
            if (second_sen.get(key) !== value) return false
        }


    }
    return true
};