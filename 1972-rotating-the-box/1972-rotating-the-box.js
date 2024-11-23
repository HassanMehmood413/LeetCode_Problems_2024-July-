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
            if (box[i][l] === '.' && box[i][l - 1] === '#') {
                [box[i][l], box[i][l - 1]] = [box[i][l - 1], box[i][l]];
                l = Math.max(1, l - 1);
            } else {
                l++;
            }
        }
    }
    let res = Array.from({ length: box[0].length }, () => []); // Pre-allocate result array
    for (let i = 0; i < box.length; i++) {
        for (let j = 0; j < box[i].length; j++) {
            res[j][box.length - i - 1] = box[i][j]; // Rotate 90° clockwise
        }

    }
    return res
};