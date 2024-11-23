/**
 * @param {character[][]} box
 * @return {character[][]}
 */
var rotateTheBox = function (box) {
    // for (let i = 0; i < box.length; i++) {
    //     let l = 1
    //     while (l <= box[0].length) {
    //         while ((box[i][l] == '.' && box[i][l - 1] == '#')) {
    //             [box[i][l], box[i][l - 1]] = [box[i][l - 1], box[i][l]]
    //             l--
    //         }
    //         l++
    //     }
    // }
    for (let i = 0; i < box.length; i++) {
        let l = 1;
        while (l < box[i].length) {
            // If the current cell is '.' and the previous cell is '#', swap them
            if (box[i][l] === '.' && box[i][l - 1] === '#') {
                [box[i][l], box[i][l - 1]] = [box[i][l - 1], box[i][l]];
                // Move back to check if further swaps are needed
                l = Math.max(1, l - 1); // Ensure `l` doesn't go out of bounds
            } else {
                l++; // Move to the next cell
            }
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