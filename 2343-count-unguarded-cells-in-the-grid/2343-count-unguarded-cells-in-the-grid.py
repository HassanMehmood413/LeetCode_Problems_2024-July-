class Solution:
    def countUnguarded(self, m: int, n: int, guards: List[List[int]], walls: List[List[int]]) -> int:
        grid = [[0] * n  for _ in range(m)]
        
        for x, y in guards + walls:
            grid[x][y] = 2
        for di, dj in guards:
            for dx, dy in [[-1, 0], [0, -1], [1, 0], [0, 1]]:
                x = di
                y = dj
                while True:
                    x += dx
                    y += dy
                    if x < 0 or y < 0 or x >= m or y >=n or grid[x][y] == 2:
                        break
                    grid[x][y] = 1
        count = 0
        for i in range(len(grid)):
            for j in range(len(grid[0])):
                if grid[i][j] == 0:
                    count += 1
        return count
