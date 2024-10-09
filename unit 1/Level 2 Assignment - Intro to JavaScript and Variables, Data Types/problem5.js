// **Problem: Polynomial Evaluation**

// 1. Define a variable `x` and assign it a value.
// 2. Define coefficients for a polynomial of degree 3, e.g., `a = 1`, `b = -2`, `c = 3`, and `d = -4` for the polynomial `ax^3 + bx^2 + cx + d`.
// 3. Evaluate the polynomial for the given value of `x` and print the result.
// 4. Additionally, calculate the first and second derivatives of the polynomial and evaluate them for the same value of `x`. Print these results as well.

let x=5

let a =1 , b=-2, c=3, d=-4;

let polynomial = a*x**3 + b*x**2 + c*x + d

console.log("polynomial Result: " +polynomial +" at x="+x);

let first_der = 3*a*x**2 + 2*b*x + c;

console.log("first_derivative result: "+ first_der + " at x="+x);

let second_der = 6*a*x + 2*b
console.log("second_derivative result: "+ second_der + " at x="+x);
