/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function (word) {
    word = word.split('')
    let map = new Map()
    word.forEach(element => {
        if (map.has(element)) {
            map.set(element, map.get(element) + 1)
        }
        else {
            map.set(element, 1)
        }
    });
    let array = Array.from(map.keys())

    let count = 0
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] == array[i].toUpperCase()) {
                a = array[i].toLowerCase()
                if (a == array[j]) {
                    count++
                }
            }
            else if (array[i] == array[i].toLowerCase()) {
                a = array[i].toUpperCase()
                if (a == array[j]) {
                    count++
                }
            }

        }
    }
    return count
};