/**
 * @param {number[]} skill
 * @return {number}
 */
var dividePlayers = function (skill) {

    let min = Math.min(...skill)
    let max = Math.max(...skill)
    let target = min + max
    skill = skill.sort((a, b) => a - b)
    let left = 0
    let sum = 0
    let right = skill.length - 1
    while (left < right) {
        let a = skill[left] + skill[right]
        if (a == target) {
            let p = skill[left] * skill[right]
            sum = sum + p
            left++
            right--
        }
        else {
            return -1
        }
    }
    return sum
};