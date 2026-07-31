/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    let row_set = Array.from({ length: 9 }, () => new Set());
    let col_set = Array.from({ length: 9 }, () => new Set());
    let square_set = Array.from({ length: 9 }, () => new Set());


    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            let box = Math.floor(i / 3) * 3 + Math.floor(j / 3)

            if (board[i][j] == ".") {
                continue
            }
            if (col_set[j].has(board[i][j]) || row_set[i].has(board[i][j]) || square_set[box].has(board[i][j])) {
                return false
            }
            col_set[j].add(board[i][j])
            row_set[i].add(board[i][j])
            square_set[box].add(board[i][j])
        }
    }
    return true
};