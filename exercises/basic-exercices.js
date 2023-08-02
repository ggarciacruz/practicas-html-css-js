//@ts-check
//Escribe un programa que pida al usuario una temperatura en grados Celsius y luego la convierta a grados Fahrenheit. 
//La fórmula para la conversión es: Fahrenheit = (Celsius * 9/5) + 32.
module.exports ={
    fromCelciusToFahrenheit:fromCelciusToFahrenheit
}

/**
 * 
 * @param {number} celcius Se debe ingresar los grados en celcius
 * @returns {number} Retorna
 */
function fromCelciusToFahrenheit(celcius) {
    return (celcius*9/5)+32;
    
}

