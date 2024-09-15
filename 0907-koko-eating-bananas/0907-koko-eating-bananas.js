/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
    let max = Math.max(...piles)
    let ultra = Infinity
    let left = 1
    let right = max
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        let count = 0
        for (let i = 0; i < piles.length; i++) {
            count += Math.ceil(piles[i] / mid)
        }
        if (count <= h) {
            ultra = mid
            right = mid - 1
        }
        else {
            left = mid + 1
        }
    }
    return ultra
};