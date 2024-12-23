from typing import List
class Solution:
    def makesquare(self, matchsticks: List[int]) -> bool:
        total_sum = sum(matchsticks)
        if total_sum % 4 != 0:
            return False
        target = total_sum // 4

        sides = [0] * 4
        matchsticks.sort(reverse=True)

        def backtrack(index): # 1,2
            if index == len(matchsticks):
                return True
            for i in range(4): # 0,1
                if sides[i] + matchsticks[index] <= target:
                    sides[i] += matchsticks[index]
                    if backtrack(index + 1):
                        return True
                    sides[i] -= matchsticks[index]
            return False

        return backtrack(0)
