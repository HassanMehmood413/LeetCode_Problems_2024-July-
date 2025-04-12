/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
    let first = 1
    let last = n
    while (first <= n) {
        let mid = Math.floor((first + last) / 2)
        let res = guess(mid)
        if (res == 0) return mid
        else if (res == -1) {
            last = mid - 1
        }
        else {
            first = mid + 1
        }
    }
    return first
};