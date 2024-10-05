/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
    let queue = []
    let wordset = new Set(wordList);
    if (!wordset.has(endWord)) return 0
    queue.push([beginWord, 1])

    while (queue.length > 0) {
        let [first, step] = queue.shift()
        for (let i = 0; i < first.length; i++) {
            for (let code = 97; code <= 122; code++) {
                let char = String.fromCharCode(code)
                let new_word = first.substring(0, i) + char + first.substring(i + 1)
                if (new_word == endWord) {
                    return step + 1
                }
                if (wordset.has(new_word)) {
                    queue.push([new_word, step + 1])
                    wordset.delete(new_word)
                }

            }
        }
    }
    return 0
};