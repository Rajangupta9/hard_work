function customJoin(array, separator) {
    let result = '';
    separator = separator === undefined? "," : separator;
    for (let i = 0; i < array.length; i++) {
        result += array[i];
        if (i < array.length - 1) {
            result += separator;
        }
    }
    return result;
}

// Test cases
const elements = ['Fire', 'Air', 'Water'];

console.log(customJoin(elements));
// Expected output: "Fire,Air,Water"

console.log(customJoin(elements, ''));
// Expected output: "FireAirWater"

console.log(customJoin(elements, '-'));
// Expected output: "Fire-Air-Water"
