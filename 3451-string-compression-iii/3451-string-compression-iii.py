class Solution:
    def compressedString(self, word: str) -> str:
        word = list(word)
        i = 0
        s = ''
        while i < len(word):
            j = i + 1
            while j < len(word) and j - i < 9 and word[i] == word[j]:
                j = j + 1
            s = s + f"{j-i}" + word[i]
            i = j
        return s