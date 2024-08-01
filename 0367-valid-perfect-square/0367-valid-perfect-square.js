/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
    if(num == Math.floor(Math.sqrt(num)) * Math.floor(Math.sqrt(num))){
        return true
    }
    else{
        return false
    }
}