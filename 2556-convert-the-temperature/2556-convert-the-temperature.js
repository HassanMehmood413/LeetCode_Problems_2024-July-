/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function (Celsius) {
    let kelvin = Celsius + 273.15
    kelvin = kelvin.toFixed(5)
    kelvin = Number(kelvin)
    let Fahrenheit = Celsius * 1.80 + 32.00
    Fahrenheit = Fahrenheit.toFixed(5)
    Fahrenheit = Number(Fahrenheit)
    let arr = [kelvin, Fahrenheit]
    return arr
};