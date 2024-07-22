a =
    "10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101"
b =
    "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"

let decimalA = BigInt(`0b${a}`);
let decimalB = BigInt(`0b${b}`);

// Compute the sum of decimalA and decimalB
let sumDecimal = decimalA + decimalB;

// Convert sumDecimal back to binary string
let binarySum = sumDecimal.toString(2);

console.log(binarySum);