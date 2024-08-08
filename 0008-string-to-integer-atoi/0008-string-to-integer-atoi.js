/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    if (s == null) {
        return 0
    }
    let res = 0
    let i = 0
    s = s.trim()
    sign = 1
    if (s[0] == '+' || s[0] == '-') {
        sign = s[0] == '-' ? -1:1
        i++
    }
    while (i < s.length && s[i] >= '0' && s[i] <= '9') {
        res = res * 10 + (s[i] - '0');
        i++;
    }


    res = res * sign
    const INT_MAX = Math.pow(2, 31) - 1;
    const INT_MIN = -Math.pow(2, 31);
    if (res > INT_MAX) return INT_MAX;
    if (res < INT_MIN) return INT_MIN;

    return res

};