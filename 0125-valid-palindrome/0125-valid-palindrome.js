/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    const strs = s.split("")
    let comb = ""
    for (let str of strs) {
        console.log(str)
        str = str.toLowerCase()
        if (isalphabet(str)) {
            comb = comb + str
        }
    }
    return comb == comb.split("").reverse().join("")

};

function isalphabet(char) {
    let code = char.charCodeAt(0);
    return (code >= 48 && code <= 57) || (code >= 97 && code <= 122);
}