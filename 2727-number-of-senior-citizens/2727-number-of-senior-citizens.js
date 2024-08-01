/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function (details) {
    let count = 0
    let j = 0
    l = details[0].length - 1
    new_l = details.length - 1
    for (let i = 0; i <= new_l; i++) {
        if (j <= new_l) {

            if (Number(details[j][11] + details[j][12]) > 60) {
                count++
            }
        }
        j++
    }
    return count

};