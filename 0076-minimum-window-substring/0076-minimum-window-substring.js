/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    s = s.split('')
    t = t.split('')
    let map = new Map()
    t.forEach((value) => {
        if (map.has(value)) {
            map.set(value, map.get(value) + 1)
        }
        else {
            map.set(value, 1)
        }
    })

    let window = new Map()
    let tcount = map.size
    let have = 0
    let need = tcount
    let min = Infinity
    let r = 0
    let res = [-1, -1]

    for (let i = 0; i < s.length; i++) {
        let c = s[i]
        window.set(c, (window.get(c) || 0) + 1);

        if (map.has(c) && window.get(c) == map.get(c)) {
            have++
        }
        while (have == need) {
            if (i - r + 1 < min) {
                min = i - r + 1
                res = [r, i]
            }
            window.set(s[r], window.get(s[r]) - 1)
            if (map.has(s[r]) && window.get(s[r]) < map.get(s[r])) {
                have--
            }
            r++
        }

    }
    let [start, end] = res
    if (min != Infinity) {
        return s.slice(start, end + 1).join("")
    } else {
        return ''
    }

};