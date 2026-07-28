/**
 * @param {number[][]} matrix
 */
var NumMatrix = function (matrix) {
    let m = matrix.length, n = matrix[0].length
    let our_matrix = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    for (let r = 0; r < m; r++){
        for(let c = 0; c < n; c++){
            our_matrix[r+1][c+1] = matrix[r][c] + our_matrix[r][c+1] + our_matrix[r+1][c] - our_matrix[r][c]
        }
    }
    this.our_matrix = our_matrix
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
   const p = this.our_matrix
   return p[row2+1][col2+1] - p[row1][col2+1] - p[row2+1][col1] + p[row1][col1]

};

/** 
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */