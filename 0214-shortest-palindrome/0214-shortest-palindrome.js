/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function (s) {
    let count = kmp(s.split('').reverse().join(""), s)
    return s.slice(count).split('').reverse().join("") + s
};
let kmp = function (txt, patt) {
    let newstring = patt + '#' + txt
    let i = 1, k = 0
    let pi = new Array(newstring.length).fill(0)
    while (i < newstring.length) {
        if (newstring[i] == newstring[k]) {
            k++
            pi[i] = k
            i++
        }
        else if (k > 0) {
            k = pi[k - 1]
        }
        else {
            pi[i] = 0
            i++
        }
    }
    return pi[newstring.length - 1]
}