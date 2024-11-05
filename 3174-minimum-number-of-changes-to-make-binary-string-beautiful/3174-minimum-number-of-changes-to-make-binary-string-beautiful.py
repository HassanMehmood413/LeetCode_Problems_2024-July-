class Solution:
    def minChanges(self, s: str) -> int:
        res = ''
        count = 0
        for i in range(len(s)):
            res = res + s[i]
            if len(res) == 2 and res[0] != res[1]:
                res = ''
                count+=1
            elif len(res) == 2:
                res = ''
        return count