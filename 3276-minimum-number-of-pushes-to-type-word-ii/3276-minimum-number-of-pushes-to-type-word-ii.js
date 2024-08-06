/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function (word) {
    word = word.split("")
    let map = new Map()
    word.forEach(element => {
        if (map.has(element)) {
            map.set(element, map.get(element) + 1)
        }
        else {
            map.set(element, 1)
        }
    });
    array = Array.from((map.values()))
    array.sort((a, b) => b - a)
    let passes = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] == 0) break
        passes = passes + Math.floor(i / 8 + 1) * array[i]
    }
    return passes
};