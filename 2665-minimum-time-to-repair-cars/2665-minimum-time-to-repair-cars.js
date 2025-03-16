/**
 * @param {number[]} ranks
 * @param {number} cars
 * @return {number}
 */
var repairCars = function (ranks, cars) {
    let left = 1
    let right = Math.min(...ranks) * cars * cars

    var repairAll = function (mid) {
        let total = 0
        for (let rank of ranks) {
            total += Math.floor(Math.sqrt(mid / rank))
            if (total >= cars) return true
        }
        return false
    }


    while (left < right) {
        let mid = Math.floor((left + right) / 2)
        if (repairAll(mid)) {
            right = mid
        }
        else {
            left = mid + 1
        }
    }
    return left

};