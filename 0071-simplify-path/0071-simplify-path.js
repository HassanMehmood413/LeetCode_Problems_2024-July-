/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
    path = path.split('/')
    let stack = []
    for (let i = 0; i < path.length; i++) {
        if (path[i] == '..') {
            if (stack.length > 0) stack.pop()
        }
        else if (path[i] != '' && path[i] != '.'){
            stack.push(path[i])
        }
    }
    let st = '/' + stack.join('/')
    return st
};