// Power Calculation

// Write a function named calculatePower that takes two integers, base, and exponent, as input and returns the result of raising the base to the exponent. Use this function to calculate the power of a given base and exponent.

// powerResult = calculatePower(2, 3);

// // Sample Output: powerResult = 8

function calculatePower(num , n){
    if(n===0){
        return 1;
    }
    let res =1;
    for(let i=1; i<=n; i++){
        res *= num;
    }
    return res;
}

powerresult = calculatePower(2, 3);
console.log(powerresult);