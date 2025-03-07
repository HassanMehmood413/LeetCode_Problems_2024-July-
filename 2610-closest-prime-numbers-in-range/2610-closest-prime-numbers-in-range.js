/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var closestPrimes = function (left, right) {
    let i = left
    let all_prime = []
    let lowest = Infinity
    while (i <= right) {
        let prime = find_prime(i)
        if (prime) {
            all_prime.push(i)
        }
        i++
    }

    if (all_prime.length < 2) return [-1, -1]

    let minDiff = Infinity;
    let result = [-1, -1];

    for (let ind = 1; ind < all_prime.length; ind++) {
        let diff = all_prime[ind] - all_prime[ind - 1]
        if (diff < minDiff) {
            minDiff = diff
            result = [all_prime[ind - 1], all_prime[ind]]
        }
    }

    return result
};

var find_prime = function (num) {
    if (num < 2) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    for (let i = 3; i * i <= num; i += 2) {
        if (num % i === 0) return false;
    }
    return true
}