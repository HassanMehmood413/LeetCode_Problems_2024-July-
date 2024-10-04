class CustomMinPriorityQueue {
    constructor() {
        this.queue = [];
    }

    enqueue(value) {
        this.queue.push(value);
        this.queue.sort((a, b) => a[0] - b[0]); // Sort based on the first element (priority)
    }

    dequeue() {
        return this.queue.shift(); // Remove and return the highest priority element
    }

    isEmpty() {
        return this.queue.length === 0; // Check if the queue is empty
    }
}

/**
 * @param {number[][]} grid
 * @return {number}
 */
var swimInWater = function (grid) {
    let n = grid.length;
    let visit = new Set();
    let minpq = new CustomMinPriorityQueue(); // Using custom MinPriorityQueue

    minpq.enqueue([grid[0][0], 0, 0]); // Enqueue the initial position and time
    visit.add(`0,0`);

    while (!minpq.isEmpty()) {
        let [t, r, c] = minpq.dequeue();
        if (r === n - 1 && c === n - 1) return t;

        for (let [row, col] of [[-1, 0], [1, 0], [0, -1], [0, 1]]) {
            let x = r + row;
            let y = c + col;

            if (x < 0 || y < 0 || x >= n || y >= n || visit.has(`${x},${y}`)) {
                continue;
            }
            visit.add(`${x},${y}`);
            // Enqueue the maximum of the current time, the grid value at (x,y)
            minpq.enqueue([Math.max(t, grid[x][y]), x, y]);
        }
    }
    return -1; // This return statement is actually unreachable
}
