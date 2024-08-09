/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function (seats, students) {
    seats = seats.sort((a, b) => a - b)
    students = students.sort((a, b) => a - b)
    sum = 0
    for (let i = 0; i < seats.length; i++) {
        if (seats[i] != students[i]) {
            a = Math.abs(seats[i] - students[i])
            sum = sum + a
        }
    }
    return sum
};