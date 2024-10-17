class Solution:
    def climbStairs(self, n: int) -> int:
        dp = [-1] * (n + 1)

        def stairs(self, n, dp):
            if n <= 1:
                return 1
            if dp[n] != -1:
                return dp[n]
            dp[n] = stairs(self,n - 1, dp) + stairs(self,n - 2, dp)
            return dp[n]
        return stairs(self,n,dp)
