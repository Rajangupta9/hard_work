// Problem 3: Diamond Pattern
// Write a program to print a diamond pattern using asterisks (\*) and spaces. The size of the diamond should be taken as input from the user.
// Example:
// Input:
// Enter the size of the diamond: 5

// ​
// Output:
//   *
//  ***
// *****
//  ***
//   *

let n = 5;
let condition = Math.floor(n/2);

for(let i=0; i<n; i++){
    let res = "";
    for(let j=0; j<n; j++){
        if(i+j === condition+i){
            res +="*"
        }
    }
    console.log(res);
}