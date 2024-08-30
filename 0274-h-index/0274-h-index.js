/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
    citations.sort((a, b) => a - b)
    let h = 0
    for (let i = 0; i < citations.length; i++) {
        if (citations[i] >= citations.length - i) {
            return citations.length - i
        }
        
    }return 0
};