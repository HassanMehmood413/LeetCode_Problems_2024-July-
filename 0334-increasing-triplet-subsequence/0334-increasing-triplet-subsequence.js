/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
    let first = Infinity; // Smallest value
    let second = Infinity; // Second smallest value

    for (let num of nums) {
        if (num <= first) {
            first = num; // Update first if num is smaller or equal
        } else if (num <= second) {
            second = num; // Update second if num is smaller or equal
        } else {
            // If num is larger than both first and second, we have found an increasing triplet
            return true;
        }
    }

    return false; // No triplet found
}



