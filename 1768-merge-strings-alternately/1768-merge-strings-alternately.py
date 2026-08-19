class Solution:
    def mergeAlternately(self, word1: str, word2: str) -> str:
        new_str = ""

        i = 0
        max_size = max(len(word1), len(word2))
        while i <= max_size:
            if i <= len(word1) - 1 and i <= len(word2) - 1:
                new_str += word1[i] + word2[i]
            elif i <= len(word1) - 1 and i > len(word2) - 1:
                new_str += word1[i]
            elif i > len(word1) - 1 and i <= len(word2) - 1:
                new_str += word2[i]
            i += 1

        return new_str