// ### Problem 1: Hollow Square Pattern

// Write a program to print a hollow square pattern using asterisks (\*) and spaces. 
// The size of the square should be taken as input from the user.

// Input:
// Enter the size of the square: 5

// ​
// Output:
// *****
// *   *
// *   *
// *   *
// *****

let n = 5;

for(let i=0; i<n; i++){
    let res = "";
    for(let j=0; j<n; j++){
        if(i===0 || j===0 || i===n-1 || j===n-1){
            res+= "*"
        }
        else res+=" "
    }
    console.log(res);
}


