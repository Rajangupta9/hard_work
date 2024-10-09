// Title: Pine Tree Pattern
// Level: Level 1 - Easy
// Time to Solve the Problem: 10 Mins
// Problem Description
// Write a program to print a pine tree pattern using asterisks *, with the trunk at the bottom centered relative to the tree.

// Input
// Input Format:

// A single integer N, which represents the height of the pine tree (excluding the trunk).
// Constraints:

// 3 <= N <= 10 (though the tree can be any size, for the sake of example)
// Output
// Output Format:

// Print the pine tree pattern according to the given height N.
// Sample Input

// 5

// Sample Output

// Refer the image
let k=10;
let n=k-1;

for(let i=0; i<n; i++){
    let res ="";
    for(let j=0; j<n*2-1; j++){
        if((j>=n-i-1) && (j<=n+i-1)){
            res +="*";
        }
        else{
            res +=" ";
        }
    }
    console.log(res);
}
res =""
for(let i=0; i<n*2-1; i++){
    
    if(i===n-1){
        res +="|"
    }
    else res +=" "
}
console.log(res);
