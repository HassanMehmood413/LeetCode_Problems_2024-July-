/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    var dfs = function (start, end, board, word, index) {
        if (index == word.length) return true
        if (start < 0 || end < 0 || start >= board.length || end >= board[0].length || board[start][end] != word[index]) return false
        let temp = board[start][end]
        board[start][end] = "#"

        for (let [x, y] of [[-1, 0], [0, -1], [1, 0], [0, 1]]) {
            if (dfs(start + x, end + y, board, word, index + 1)) {
                return true
            }
        }
        board[start][end] = temp
        return false
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (dfs(i, j, board, word, 0)) {
                return true
            }
        }
    }
    return false
};