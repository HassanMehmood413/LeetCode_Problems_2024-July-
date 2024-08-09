/**
 * @param {number[][]} score
 * @param {number} k
 * @return {number[][]}
 */
var sortTheStudents = function (score, k) {
    for (let i = 0; i < score.length - 1; i++) {
        for (let j = i + 1; j < score.length; j++) {

            if (score[i][k] < score[j][k]) {
                [score[i], score[j]] = [score[j], score[i]]
            }
        }
    }
    return score

};