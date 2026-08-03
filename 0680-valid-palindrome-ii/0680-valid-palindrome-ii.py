class Solution:
    def validPalindrome(self, s: str) -> bool:
        # civic
        # civibc

        left = 0
        right = len(s) - 1
        count = 0


        while left < right:
            if s[left] != s[right]:
                full_string = s
                remove_l = s[:left] + s[left+1:]
                remove_r = s[:right] + s[right+1:]
                if remove_l == remove_l[::-1] or remove_r == remove_r[::-1]:
                    return True
                else:
                    return False
            left+=1
            right-=1

        return True
