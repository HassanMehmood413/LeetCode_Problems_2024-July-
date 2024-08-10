/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumPrimeDifference = function (nums) {
    function isPrime(n) {
        if (n <= 1) return false;
        if (n <= 3) return true;
        if (n % 2 === 0 || n % 3 === 0) return false;
        for (let i = 5; i * i <= n; i += 6) {
            if (n % i === 0 || n % (i + 2) === 0) return false;
        }
        return true;
    }

    let primes = [];

    for (let i = 0; i < nums.length; i++) {
        if (isPrime(nums[i])) {
            primes.push(i);
        }
    }
    primes.sort((a, b) => a - b)
    return primes[primes.length - 1] - primes[0]
};