/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {

    let bfs = function (r, c) {
        let queue = [[r, c]];
        grid[r][c] = "0"; // Mark as visited

        while (queue.length > 0) {
            let [row, col] = queue.shift();

            // Check all four directions: up, down, left, right
            for (let [dx, dy] of [[-1, 0], [1, 0], [0, -1], [0, 1]]) {
                let x = row + dx;
                let y = col + dy;

                // Check boundaries and if the current cell is land ('1')
                if (x >= 0 && y >= 0 && x < rows && y < cols && grid[x][y] == "1") {
                    grid[x][y] = "0"; // Mark as visited
                    queue.push([x, y]); // Add to the queue to explore its neighbors
                }
            }
        }
    };

    let rows = grid.length;
    let cols = grid[0].length;
    let number = 0;

    // Traverse the grid
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] == "1") {
                number++;  // Found a new island
                bfs(r, c); // Perform BFS to mark the entire island
            }
        }
    }

    return number;
}

