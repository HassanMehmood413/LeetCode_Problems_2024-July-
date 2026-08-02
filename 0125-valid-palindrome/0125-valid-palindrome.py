class Solution:
    def isPalindrome(self, s: str) -> bool:
        combined = re.sub(r"[^a-zA-Z0-9]", "", s)
        combined = combined.lower()
        check = combined[::-1]
        if check == combined:
            return True
        return False