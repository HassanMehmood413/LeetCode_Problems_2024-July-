/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function (n) {
    let matches = 0
    while (n != 1 && n >= 0) {
        // for even 
        if (n % 2 == 0) {
            matches = matches + (n / 2)
            n = n / 2
        }
        else {
            matches = matches + (n - 1) / 2
            n = Math.floor((n - 1) / 2 + 1)
        }
    }
    return matches
};