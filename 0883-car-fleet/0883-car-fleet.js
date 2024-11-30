/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function (target, position, speed) {
    let pair = []
    for (let i = 0; i < position.length; i++) {
        pair.push([position[i], speed[i]])
    }
    pair = pair.sort((a, b) => b[0] - a[0])

    let arr = []
    for (let i = 0; i < pair.length; i++) {
        let a = ((target - pair[i][0]) / pair[i][1])
        arr.push(a)
    }
    console.log(arr)
    // 1. Fleets are determined by checking the time for each car and comparing it to the previous one.
    // 2. If a car’s time is greater than the previous car’s time, it forms a new fleet.
    // 3. If a car’s time is less than or equal to the previous car’s time, it joins the same fleet.
    let count = 0
    let prev = -1
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > prev) {
            count++
            prev = arr[i]
        }
    }
    return count
};