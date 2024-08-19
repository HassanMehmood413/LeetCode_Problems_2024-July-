class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        s1_sorted = ''.join(sorted(s1))
        s1_length = len(s1)
    
        for i in range(len(s2) - s1_length + 1):
        # Extract the substring of length s1_length
            substring = s2[i:i + s1_length]
        
        # Sort the substring and compare it to sorted s1
            if ''.join(sorted(substring)) == s1_sorted:
                return True
            
        return False