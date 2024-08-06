/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {
    for (let i = 0; i < image.length; i++) {
        image[i] = image[i].reverse()
    }
    for (let i = 0; i < image.length; i++) {
        for (let j = 0; j < image.length; j++) {
            if (image[i][j] == 1) {
                image[i][j] = 0
            }
            else {
                image[i][j] = 1
            }

        }
    }
    return image
};