// Temperature Conversion

// Write two functions named celsiusToFahrenheit and fahrenheitToCelsius to convert between Celsius and Fahrenheit.

// Use the functions to convert a given temperature..

function celsiusToFahrenheit(cel){
    return ((cel*(9/5))+32).toFixed(2);
}
function fahrenheitToCelsius(far){
    return ((far-32)*(5/9)).toFixed(2);
}

console.log(celsiusToFahrenheit(37));
console.log(fahrenheitToCelsius(97));