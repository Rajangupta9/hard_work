// Factorial Calculation

// Write a function named calculateFactorial that takes an integer n as input and returns the factorial of n (n!). Use this function to calculate the factorial of a given number.

// result = calculateFactorial(5);

// // Sample Output: result = 120

function calculateFactorial(num){

    let result =1;
    for(let i=1; i<=num; i++){
        result *=i;
    }
    return result;
}
console.log(calculateFactorial(5));
