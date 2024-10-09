// Find the Average

// Write a function named calculateAverage that takes an array of numbers as input and returns the average (mean) of those numbers.

// Sample Input: [10, 15, 20, 25]

// Sample Output: 17.5

function average(num){
    let sum=0;
    for(let i=0; i<num.length; i++){
          sum+=num[i];
    }
    return (sum/num.length).toFixed(2);
}

console.log(average([10,15, 20 , 25]))