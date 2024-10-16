/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
    let col = new Set()
    let pos = new Set() // (r+c)
    let neg = new Set() // (r-c)

    let res = []
    let board = Array.from({ length: n }, () => Array(n).fill("."))


    var again = function (r) {
        if (r == n) {
            let copy = board.map(value => value.join(""))
            res.push(copy)
            return
        }
        for (let i = 0; i < n; i++) {
            if (col.has(i) || pos.has(r + i) || neg.has(r - i)) {
                continue
            }
            col.add(i)
            pos.add(r + i)
            neg.add(r - i)
            board[r][i] = "Q"
            again(r + 1)

            col.delete(i)
            pos.delete(r + i)
            neg.delete(r - i)
            board[r][i] = "."
        }
    }
    again(0)
    return res

};