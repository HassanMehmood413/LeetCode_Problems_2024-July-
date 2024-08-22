/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    t = t.split('');
    s = s.split("");

    // Initialize the map with the count of each character in t
    let map = new Map();
    t.forEach(element => {
        if (map.has(element)) {
            map.set(element, map.get(element) + 1);
        } else {
            map.set(element, 1);
        }
    });

    let tcount = map.size;
    let windows = new Map();
    let have = 0;
    let need = tcount;  // Need is the number of unique characters in t
    let r = 0;
    let res = [-1, -1];
    let minlength = Infinity;

    for (let i = 0; i < s.length; i++) {
        let c = s[i];
        windows.set(c, (windows.get(c) || 0) + 1);

        if (map.has(c) && windows.get(c) === map.get(c)) {
            have++;
        }

        while (have === need) {
            if (i - r + 1 < minlength) {
                res = [r, i];
                minlength = i - r + 1;
            }

            windows.set(s[r], windows.get(s[r]) - 1);
            if (map.has(s[r]) && windows.get(s[r]) < map.get(s[r])) {
                have--;
            }
            r++;
        }
    }

    let [start, end] = res;
    if (minlength !== Infinity) {
        return s.slice(start, end + 1).join("")
    } else {
        return ''
    }

};