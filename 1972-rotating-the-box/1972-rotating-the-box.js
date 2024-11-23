/**
 * @param {character[][]} box
 * @return {character[][]}
 */
var rotateTheBox = function (box) {
    for (let i = 0; i < box.length; i++) {
        let l = 1
        while (l <= box[0].length) {
            while ((box[i][l] == '.' && box[i][l - 1] == '#')) {
                [box[i][l], box[i][l - 1]] = [box[i][l - 1], box[i][l]]
                l--
            }
            l++
        }
    }
    let res = []
    for (let i = 0; i < box[0].length; i++) {
        let arr = []
        for (let j = 0; j < box.length; j++) {
            arr.push(box[j][i])
        }
        arr.reverse()
        res.push(arr)
    }
    return res
};