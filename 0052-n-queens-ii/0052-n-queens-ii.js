/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
    var backtrack = function (col, pos, neg, r) {
        if (r == n) {
            return 1
        }
        let count = 0
        for (let i = 0; i < n; i++) {
            if (col.has(i) || pos.has(r + i) || neg.has(r - i)) {
                continue
            }
            col.add(i)
            pos.add(r + i)
            neg.add(r - i)

            count += backtrack(col, pos, neg, r + 1)

            col.delete(i)
            pos.delete(r + i)
            neg.delete(r - i)
        }
        return count
    }
    return backtrack(new Set(), new Set(), new Set(), 0)
};