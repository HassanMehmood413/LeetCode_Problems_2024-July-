/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {

    s = s.split('')
    p = p.split('')
    let l = p.length
    let arr = []
    let map = new Map()
    let window2 = new Map()
    p.forEach(element => {
        if (map.has(element)) {
            map.set(element, map.get(element) + 1)
        }
        else {
            map.set(element, 1)
        }
    });
    let left = 0
    for (let right = 0; right < s.length; right++) {
        window2.set(s[right], (window2.get(s[right]) || 0) + 1);
        if (window2.size == map.size) {
            let k = window2.size
            let i = 0
            for (let [key, value] of map) {
                if (window2.get(key) == value) {
                    i++
                }
                else {
                    break
                }
            }
            if (i == k) {
                arr.push(left)
            }
        }
        if (right - left + 1 >= l) {
            if (window2.get(s[left]) == 1) {
                window2.delete(s[left])
            }
            else {
                window2.set(s[left], window2.get(s[left]) - 1)
            }
            left++
        }
    }
    return arr
};