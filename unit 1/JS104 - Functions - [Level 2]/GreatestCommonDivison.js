
// Greatest Common Divisor (GCD)

// Write a function named findGCD that takes two integers as input and returns their greatest common divisor (GCD). Use this function to find the GCD of two given numbers.

// gcdResult = findGCD(36, 48);

// // Sample Output: gcdResult = 12


function findGCD(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

let gcdResult = findGCD(36, 48);
console.log("GCD:", gcdResult);