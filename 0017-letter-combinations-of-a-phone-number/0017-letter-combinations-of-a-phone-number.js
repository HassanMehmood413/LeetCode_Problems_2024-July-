/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    keyboard = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz"
    }

    let res = []
    var again = function (i, digits, keyboard, str) {
        if (str.length == digits.length) {
            res.push(str)
            return
        }
        for (let s of keyboard[digits[i]]) {
            again(i + 1, digits, keyboard, str + s)
        }
    }
    if (digits) {
        again(0, digits, keyboard, '')
    }
    return res

};