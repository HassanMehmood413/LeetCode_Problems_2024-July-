class Solution:
    def generate(self, numRows: int) -> List[List[int]]:
        def nCr(n,r):
            ans = 1
            for i in range(r):
                ans = ans * (n-i)
                ans = ans / (i+1)
            return round(ans)

        res = []
        for i in range(1, numRows+1):
            temp = []
            for j in range(1,i+1):
                temp.append(nCr(i - 1, j - 1))
            res.append(temp)
        return res
