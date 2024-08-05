/**
 * @param {number} x
 * @param {number} y
 * @return {string}
 */
var losingPlayer = function (x, y) {
    turns = Math.floor(Math.min(x, y / 4))
    repeat = 1
    let Alice_val = 0
    let Bob_val = 0
    while (repeat <= turns) {
        if (repeat % 2 != 0) {
            Alice_val = 75 + 10 * 4 + Alice_val
        }
        else {
            Bob_val = 75 + 10 * 4 + Bob_val
        }
        repeat++
    }
    if (Alice_val == 0) {
        return 'Bob'
    }
    else if (Bob_val == 0) {
        return 'Alice'
    }
    else if (Alice_val == Bob_val) {
        return 'Bob'
    } 
    else if (Alice_val > Bob_val) {
        return 'Alice'
    }
    else {
        return 'Bob'
    }
};