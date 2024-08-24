/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
    let min = Infinity
    for (let i = 0; i < letters.length; i++) {
        a = letters[i].charCodeAt() - 'a'.charCodeAt()
        min = letters[i]
        k = target.charCodeAt() - 'a'.charCodeAt()
        if (a > k) {
            return letters[i]
        }
    }
    return letters[0]
};