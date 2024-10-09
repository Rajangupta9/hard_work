// fist we taking input weight and height
let weight = 70;
let height = 1.75;

// in this line i have calculate bmi
let bmi = weight/(height*height)

// now i handle all the edge case and preventing all type of error
if(height>0 && weight>0){
     console.log("Your BMI is: " + bmi.toFixed(2))
}
// Here i am checkin height is equal to 0
else if(height===0){
    console.log("Invalid input, height cannot be zero.")
}
// in this else part we are printing input is wrong
else {
    console.log("Invalid input , height and weight must be positive numbers.")
}

// fist we taking input weight and height
 weight = 55;
 height = 1.60;

// in this line i have calculate bmi
bmi = weight/(height*height)

// now i handle all the edge case and preventing all type of error
if(height>0 && weight>0){
     console.log("Your BMI is: " + bmi.toFixed(2))
}
// Here i am checkin height is equal to 0
else if(height===0){
    console.log("Invalid input, height cannot be zero.")
}
// in this else part we are printing input is wrong
else {
    console.log("Invalid input , height and weight must be positive numbers.")
}

// fist we taking input weight and height
weight = 90;
height = 1.80;

// in this line i have calculate bmi
bmi = weight/(height*height)

// now i handle all the edge case and preventing all type of error
if(height>0 && weight>0){
    console.log("Your BMI is: " + bmi.toFixed(2))
}
// Here i am checkin height is equal to 0
else if(height===0){
   console.log("Invalid input, height cannot be zero.")
}
// in this else part we are printing input is wrong
else {
   console.log("Invalid input , height and weight must be positive numbers.")
}