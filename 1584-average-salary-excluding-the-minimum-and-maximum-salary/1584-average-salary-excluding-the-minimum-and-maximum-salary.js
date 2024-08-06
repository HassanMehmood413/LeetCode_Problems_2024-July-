/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function (salary) {
    salary = salary.sort((a, b) => a - b)
    let sum = 0
    let count = 0
    console.log(salary)
    for (let i = 1; i < salary.length - 1; i++) {
        sum = sum + salary[i]
        count++
    }
    return (sum / count)
};