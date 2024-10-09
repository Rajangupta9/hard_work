// Find Minimum

// Write a function named findMinMax that takes an array of numbers as input and returns the minimum value present in the array. The values should be the minimum numbers in the input array, respectively.

// Sample Input: arr = [15, 2, 34, 8, 19]

// Sample Output: min = minimum(arr) ;

// //output: min = 2 ;

function minimum(arr){
    let min = arr[0];
    for(let i=1; i<arr.length; i++){
        if(arr[i]<min){
            min = arr[i];
        }
    }
    return min;
}

let arr = [15, 2, 34, 8, 19];
console.log(minimum(arr));