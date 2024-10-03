/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
    let rows = board.length
    let cols = board[0].length


    var dfs = function (start, end) {
        if (start < 0 || start >= rows || end < 0 || end >= cols || board[start][end] != "O") {
            return
        }
        board[start][end] = "B"

        for (let [r, c] of [[-1, 0], [1, 0], [0, -1], [0, 1]]) {
            let x = r + start
            let y = c + end
            dfs(x, y)

        }
    }



    // check all rows
    for (let i = 0; i < rows; i++) {
        if (board[i][0] == "O") {
            dfs(i, 0)
        }
        if (board[i][cols - 1] == "O") {
            dfs(i, cols - 1)
        }
    }
    for (let i = 0; i < cols; i++) {
        if (board[0][i] == "O") {
            dfs(0, i)
        }
        if (board[rows - 1][i] == "O") {
            dfs(rows - 1, i)
        }
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (board[i][j] == "O") {
                board[i][j] = "X"
            }
            else if (board[i][j] == 'B') {
                board[i][j] = "O"
            }
        }
    }
    return board
};