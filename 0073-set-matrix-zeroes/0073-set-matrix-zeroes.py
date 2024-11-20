class Solution:
    def setZeroes(self, matrix: List[List[int]]) -> None:
        row = len(matrix)
        col = len(matrix[0])
        rows = []
        cols = []
        # for columns
        for i in range(col):
            for j in range(row):
                if matrix[j][i] == 0:
                    cols.append(i)
        # for rows
        for i in range(0,row):
            if 0 in matrix[i]:
                matrix[i] = [0] * len(matrix[i])
                
        for i in cols:
            for j in range(row):
                matrix[j][i] = 0
        return matrix


        