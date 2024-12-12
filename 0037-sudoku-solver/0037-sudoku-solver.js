/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
    issolved(board)
};

var issolved = function (board) {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] == '.') {
                for (let n = '1'; n <= '9'; n++) {
                    if (valid(board, i, j, n)) {
                        board[i][j] = n.toString()
                        if (issolved(board) == true) {
                            return true
                        }
                        else {
                            board[i][j] = '.'
                        }
                    }
                }
                return false
            }
        }
    }
    return true
}

var valid = function (board, row, col, c) {
    for (let i = 0; i < 9; i++) {
        if (board[i][col] == c) {
            return false
        }
        if (board[row][i] == c) {
            return false
        }
        const boxRow = 3 * Math.floor(row / 3) + Math.floor(i / 3);
        const boxCol = 3 * Math.floor(col / 3) + i % 3;
        if (board[boxRow][boxCol] == c) {
            return false
        }
    }
    return true
}