class Solution:
    def shortestPalindrome(self, s: str) -> str:
        if s == "":
            return ""
        for i in range(len(s), 0, -1):
            cur = s[:i]  # Current prefix
            rev = cur[::-1]  # Reversed prefix
            right = s[i:]
            if(rev == cur):
                return right[::-1] + s
        
