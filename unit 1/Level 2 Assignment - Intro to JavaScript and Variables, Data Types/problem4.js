// **Problem: Complex Number Operations**

// 1. Define two complex numbers `z1` and `z2` (e.g., `z1 = 2 + 3j` and `z2 = 4 - 2j`).
// 2. Perform the following operations and print the results:
//     - Addition of `z1` and `z2`
//     - Subtraction of `z2` from `z1`
//     - Multiplication of `z1` and `z2`
//     - Division of `z1` by `z2`
// 3. Print the real and imaginary parts of each result separately.

let z1 = "2 + 3j"
let z2 = "4 - 2j"


let z1_real = 2
let z1_imag = 3
let z2_real = 4
let z2_imag = -2

//sum
let sum_real = z1_real+z2_real
let sum_imag = z1_imag+z2_imag

console.log("--------------------------------------------")

console.log("Addition: "+sum_real+" + " +"("+sum_imag+"j"+")")
console.log("Real Part: "+sum_real)
console.log("Imaginary Part: "+sum_imag+"j")

console.log("------------------------------------------")
//subtract
let sub_real = z2_real-z1_real
let sub_imag = z2_imag-z1_imag

console.log("subtraction: "+sub_real+" + " +"("+sub_imag+"j"+")")
console.log("Real Part: "+sub_real)
console.log("Imaginary Part: "+sub_imag+"j")

console.log("--------------------------------------------")
//multiple
let mul_real = ((z1_real*z2_real)-(z1_imag*z2_imag))
let mul_imag = ((z1_real*z2_imag)+(z1_imag*z2_real))

console.log("subtraction: "+mul_real+" + " +"("+mul_imag+"j"+")")
console.log("Real Part: "+mul_real)
console.log("Imaginary Part: "+mul_imag+"j")

console.log("----------------------------------------------")
//division
let div_real = ((z1_real*z2_real)+(z1_imag*z2_imag))/(z2_real**2 +z2_imag**2)
let div_imag = ((z1_imag*z2_real)-(z1_real*z2_imag))/(z2_real**2 + z2_imag**2)

console.log("subtraction: "+div_real+" + " +"("+div_imag+"j"+")")
console.log("Real Part: "+div_real)
console.log("Imaginary Part: "+div_imag+"j")