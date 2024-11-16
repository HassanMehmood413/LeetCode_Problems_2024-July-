/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
    let stack = []
    for (let i = 0; i < asteroids.length; i++) {
        // for same
        if (stack.length == 0) {
            stack.push(asteroids[i])
        }
        else if (stack[stack.length - 1] == asteroids[i]) {
            stack.pop()
        }

        else if (stack[stack.length - 1] < 0 && asteroids[i] > 0) {
            stack.push(asteroids[i])
        }
        else if (stack[stack.length - 1] > 0 && asteroids[i] < 0) {
            while (stack.length > 0 && stack[stack.length - 1] > 0 && asteroids[i] < 0) {
                a = asteroids[i] * -1
                if (a > stack[stack.length - 1]) {
                    stack.pop()
                    if (stack.length == 0 || stack[stack.length - 1] < 0) {
                        stack.push(asteroids[i])
                        break
                    }
                }
                else if (a == stack[stack.length - 1]) {
                    stack.pop()
                    break
                }
                else {
                    break
                }
            }
        }
        else if (stack[stack.length - 1] > 0 && asteroids[i] > 0) {
            stack.push(asteroids[i])
        }
        else {
            stack.push(asteroids[i])
        }
    }
    return stack
};