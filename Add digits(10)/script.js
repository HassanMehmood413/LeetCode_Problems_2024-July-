numarray = num.toString().split('')
    while (numarray.length !== 1) {
        num = numarray.reduce((acc, curr) => Number(acc) + Number(curr), 0)
        numarray = num.toString().split('')
    }
    return num