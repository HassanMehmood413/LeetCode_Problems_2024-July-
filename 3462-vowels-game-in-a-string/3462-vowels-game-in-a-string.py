class Solution:
    def doesAliceWin(self, s: str) -> bool:
        s = list(s)
        count = 0
        for i in range(len(s)):
            if s[i] == 'a' or s[i] == 'e' or s[i] == 'i' or s[i] == 'o' or s[i] == 'u':
                count+=1
        if count > 0:
            return True
        else:
            return False



