/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    let rows = board.length
    let cols = board[0].length
    var dfs = function (start, end, index, board, word) {
        if (index == word.length) return true
        if (start < 0 || end < 0 || start >= rows || end >= cols || board[start][end] != word[index]) return false

        let temp = board[start][end]
        board[start][end] = "#"
        for (let [x, y] of [[-1, 0], [1, 0], [0, -1], [0, 1]]) {
            if (dfs(x + start, y + end, index + 1, board, word)) {
                return true
            }
        }
        board[start][end] = temp
        return false
    }





    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (dfs(i, j, 0, board, word)) {
                return true
            }
        }
    }
    return false
};  