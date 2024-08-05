/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function (n) {
    let count = 10;
    if (n === 0) return 1;
    if (n === 1) return 10;
    let uniqueCount = 9;
    for (let i = 2; i <= n; i++) {
        uniqueCount = uniqueCount * (11 - i);
        count = count + uniqueCount;
    }
    return count;
};