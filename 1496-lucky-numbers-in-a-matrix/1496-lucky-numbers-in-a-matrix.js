/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function (matrix) {
    // my method

    // let arr = []
    // for (let i = 0; i < matrix.length; i++) {
    //     let a = Math.min(...matrix[i])
    //     arr.push(a)
    // }
    // for (let i = 0; i < matrix.length; i++) {
    //     let a = arr.shift()
    //     let index = matrix[i].indexOf(a)
    //     let count = 0
    //     for (let j = 0; j < matrix.length; j++) {
    //         if (a >= matrix[j][index]) {
    //             count++
    //         }
    //     }
    //     if (count == matrix.length) {
    //         return [a]
    //     }
    // }
    // return []

    // kisi ajnabi ka method
    for (let i = 0; i < matrix.length; i++){
        let arr = matrix[i]
        let min = Math.min(...arr)
        let index = matrix[i].indexOf(min)
        if(matrix.every(element => element[index]<=min)) return [min]
    }
    return []
};