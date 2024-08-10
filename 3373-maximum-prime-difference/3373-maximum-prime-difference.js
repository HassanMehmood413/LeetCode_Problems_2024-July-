/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumPrimeDifference = function (nums) {
    function isPrime(n) {
        if (n <= 1) return false;
        for (let i = 2; i < n; i ++) {
            if(n%i == 0){
                return false
            }
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