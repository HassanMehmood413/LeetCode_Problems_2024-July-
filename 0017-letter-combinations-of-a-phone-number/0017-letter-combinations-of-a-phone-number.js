/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    const phoneMap = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'qprs',
        8: 'tuv',
        9: 'wxyz',
    };
    let res = []
    var again = function (i, str, digits, phoneMap, res) {
        if (str.length == digits.length) {
            res.push(str)
            return
        }
        for (let s of phoneMap[digits[i]]) {
            again(i + 1, str + s, digits, phoneMap, res)
        }
    }
    if (digits) {
        again(0, "", digits, phoneMap, res)
    }
    return res
};