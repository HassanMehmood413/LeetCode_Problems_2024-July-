/**
 * @param {string[]} folder
 * @return {string[]}
 */
var removeSubfolders = function (folder) {
    folder = folder.sort()
    let arr = [folder[0]]
    let str = ""
    str = folder[0]

    for (let i = 1; i < folder.length; i++) {
        if (!folder[i].startsWith(str + '/')) {
            arr.push(folder[i])
            str = folder[i]
        }

    }
    return arr
};