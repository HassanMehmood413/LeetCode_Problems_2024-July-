/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minBitFlips = function (start, goal) {

    // start = BigInt(start).toString(2)
    // goal = BigInt(goal).toString(2)
    // if (goal.length < start.length) {
    //     while (goal.length != start.length) {

    //         goal = goal.split('')
    //         goal.unshift('0')
    //         goal = goal.join("")
    //     }
    // }
    // else if (start.length < goal.length) {
    //     while (start.length != goal.length) {

    //         start = start.split('')
    //         start.unshift('0')
    //         start = start.join("")
    //     }
    // }
    // let count = 0
    // for (let i = 0; i < start.length; i++) {
    //     if (start[i] != goal[i]) {
    //         count++
    //     }
    // }
    // return count


    // Short method
    let xgate = start ^ goal
    let binary = xgate.toString(2)
    return binary.split('1').length-1
};