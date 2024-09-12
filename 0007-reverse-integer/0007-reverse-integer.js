/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let count = 0
    if (x < 0) {
        count = -1
        x = x * count
    }
    x = x.toString().split("").reverse('').join("")
    if (count != 0) {
        if ((x < Math.pow(2, 31) - 1) && (x > -Math.pow(2, 31))) {
            return x * count
        }
        else {
            return 0
        }
    }
    if (x[0] == 0) {
        x = x.split('')
        while (x[0] == 0) {
            x.shift()
        }
        return x.join('')
    }
    if ((x < Math.pow(2, 31) - 1) && (x > -Math.pow(2, 31))) {
        return x
    }
    else {
        return 0
    }
};