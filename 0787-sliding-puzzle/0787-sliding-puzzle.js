/**
 * @param {number[][]} board
 * @return {number}
 */
var slidingPuzzle = function (board) {
    let goal = [[1, 2, 3], [4, 5, 0]]
    var swap = function (currentBoard, x1, y1, x2, y2) {
        let temp = currentBoard[x1][y1]
        currentBoard[x1][y1] = currentBoard[x2][y2]
        currentBoard[x2][y2] = temp
    }
    var compare = function (board, goal) {
        if (board.length != goal.length || board[0].length != goal[0].length) return false
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[0].length; j++) {
                if (board[i][j] != goal[i][j]) {
                    return false
                }
            }
        }
        return true
    }
    var bfs = function (board, goal) {
        let queue = [[board, -1, -1, 0]]
        let visit = new Set()
        visit.add(board.toString())
        while (queue.length > 0) {
            let [currentBoard, zeroRow, zeroCol, moves] = queue.shift()
            if (compare(currentBoard, goal)) {
                return moves
            }
            if (zeroRow == -1 || zeroCol == -1) {
                for (let i = 0; i < currentBoard.length; i++) {
                    for (let j = 0; j < currentBoard[0].length; j++) {
                        if (currentBoard[i][j] === 0) {
                            zeroRow = i;
                            zeroCol = j;
                            break;
                        }
                    }
                }
            }
            for (let [a, b] of [[-1, 0], [1, 0], [0, -1], [0, 1]]) {
                let x = zeroRow + a
                let y = zeroCol + b
                if (x >= 0 && y >= 0 && x < currentBoard.length && y < currentBoard[0].length) {
                    swap(currentBoard, zeroRow, zeroCol, x, y)
                    let newstate = currentBoard.toString()
                    if (!visit.has(newstate)) {
                        visit.add(newstate)
                        queue.push([JSON.parse(JSON.stringify(currentBoard)), x, y, moves + 1])
                    }
                    swap(currentBoard, zeroRow, zeroCol, x, y)
                }

            }
        }
        return -1
    }
    return bfs(board, goal)
};