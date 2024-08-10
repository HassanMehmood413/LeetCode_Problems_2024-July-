/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function (spells, potions, success) {
    // let i = 0
    // let j = 0
    // let count = 0
    // let occurrences = []
    // while (i < spells.length) {
    //     if (j > potions.length - 1) {
    //         i++
    //         j = 0
    //         occurrences.push(count)
    //         count = 0
    //     }
    //     else {

    //         a = potions[j] * spells[i]
    //         if (a >= success) {
    //             count++
    //         }
    //         j++
    //     }
    // }   
    // return occurrences
    potions = potions.sort((a, b) => a - b)
    let occurrences = [];
    for (let i = 0; i < spells.length; i++) {
        let spell = spells[i]
        let left = 0
        let right = potions.length
        while (left < right) {
            let mid = Math.floor((left + right) / 2)
            if (spell * potions[mid] >= success) {
                right = mid
            }
            else {
                left = mid + 1
            }
        }
        let count = potions.length - left
        occurrences.push(count)
    }
    return occurrences



};