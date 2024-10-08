/**
 * @param {string} s
 * @return {number}
 */
var minLength = function (s) {
    let arr = []
    for (let i = 97; i <= 122; i += 2) {  // ASCII values for lowercase a-z, step by 2
        let a = String.fromCharCode(i)
        a = a.toUpperCase()  // Convert to uppercase
        let b = String.fromCharCode(i + 1)
        b = b.toUpperCase()  // Convert to uppercase
        arr.push(`${a}${b}`)  // Push two-letter combinations to the array
    }


    let stack = []  // Initialize empty stack
    for (let i = 0; i < s.length; i++) {
        stack.push(s[i]);  // Push each character into the stack

        // Check if last two characters form a pair that exists in arr
        while (stack.length > 1) {
            let last = stack[stack.length - 1];  // Last character
            let secondLast = stack[stack.length - 2];  // Second last character
            let pair = `${secondLast}${last}`;  // Form two-character string

            // If this pair is found in arr, pop them off the stack
            if (arr.includes(pair)) {
                stack.pop();  // Remove last character
                stack.pop();  // Remove second last character
            }
            else{
                break
            }
        }
    }
    return stack.length  // Output the final stack after all possible reductions

};