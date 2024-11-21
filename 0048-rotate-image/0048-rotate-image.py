class Solution:
    def rotate(self, matrix: List[List[int]]) -> None:
        rows = len(matrix)
        cols = len(matrix[0])

        for i in range(rows):
            for j in range(i+1,cols):
                temp = matrix[i][j]
                matrix[i][j] = matrix[j][i]
                matrix[j][i] = temp
        for i in range(rows):
            matrix[i].reverse()
        return matrix
        
