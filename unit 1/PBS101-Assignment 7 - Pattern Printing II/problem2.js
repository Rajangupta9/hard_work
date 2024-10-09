// Title: Brick Wall Pattern
// Level: Level 1 - Easy
// Time to Solve the Problem: 15 Mins
// Problem Description
// Write a program to print a brick wall pattern of height H and width W. Each brick is represented by the symbol "[]" and each row of bricks is offset to create the typical brick wall pattern.

// Input
// Input Format:

// The first line contains the height H of the brick wall.
// The second line contains the width W of the brick wall (how many bricks in a row).
// Constraints:

// 1 <= H <= 20
// 1 <= W <= 20
// Output
// Output Format:

// Print the brick wall pattern with the specified height and width.
// Sample Input

// 4
// 5

// Sample Output

// Refer the image

// Screenshot 2024-04-23 142841.png

let height = 4; 
let width = 5;

for(let i=0; i<height; i++){
    let res = "";

    for(let j=0; j<width*2; j++){
        if(j%2===0 && i%2===0){
            res +="[]"
        }
        else{
            res+=" "
        }
        if(j%2!==0 && i%2!==0){
            res +="[]"
        }
        else{
            res+=" "
        }
        
    }
    console.log(res);
}