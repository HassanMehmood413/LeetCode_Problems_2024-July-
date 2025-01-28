class Solution:
    def findMaxFish(self, grid: List[List[int]]) -> int:
        visit = set()
        max_fish = 0

        def dfs(start, end):
            if (
                start < 0
                or end < 0
                or start >= len(grid)
                or end >= len(grid[0])
                or grid[start][end] == 0
                or (start, end) in visit
            ):
                return 0

            count = grid[start][end]
            visit.add((start, end))

            for x, y in [[-1, 0], [0, -1], [1, 0], [0, 1]]:
                first = x + start
                second = y + end

                count += dfs(first, second)

            return count

        for i in range(0, len(grid)):
            for j in range(0, len(grid[0])):
                if grid[i][j] > 0 and (i, j) not in visit:
                    allover = dfs(i, j)
                    max_fish = max(max_fish, allover)

        return max_fish
