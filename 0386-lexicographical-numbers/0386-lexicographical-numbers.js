/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function (n) {
    // let arr = []
    // for (let i = 1; i <= n; i++) {
    //     arr.push(i)
    // }
    // return arr.sort()

    let arr = []
    let curr = 1
    for (let i = 1; i <= n; i++) {
        arr.push(curr)
        if (curr * 10 <= n) {
            curr = curr * 10
        }
        else {
            while (curr >= n || curr % 10 == 9) {
                curr = Math.floor(curr / 10)
            }
            curr++

        }
    }
    return arr
};