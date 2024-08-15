/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
    let five = 0
    let ten = 0
    for (let i = 0; i < bills.length; i++) {
        if (bills[i] == 5) {
            five++
        }
        else if (bills[i] == 10) {
            if (five > 0) {
                five--
                ten++
            }
            else {
                return false
            }
        }
        else if (bills[i] == 20) {
             if (five > 0 && ten > 0) {
                five--
                ten--
            }
            else if (five > 2) {
                five -= 3
            }
            else {
                return false
            }
        }
    }
    return true
};