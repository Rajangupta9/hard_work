// **Problem: Swap Two Variables Without a Temporary Variable**

// 1. Define two variables, `a` and `b`, with values 5 and 10 respectively.
// 2. Swap the values of `a` and `b` without using a temporary variable.
// 3. Print the values of `a` and `b` after swapping.

let a = 5
let b = 10

a = a+b
b = a-b
a = a-b

console.log("value of a: "+a+ "\n"+"value of b: "+ b)