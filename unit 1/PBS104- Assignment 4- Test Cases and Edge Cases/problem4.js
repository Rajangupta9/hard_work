//here we taking three input 
let principal = 1000
let rate = 5
let time = 3
//her we calculate simple interest 
//and handling edge case if any case anyone provied negative value then you should not print
if(principal>-1 && rate >-1 && time>-1){
let simpleInterest = (principal*rate*time)/100;
//here we printing
console.log("The simple interest is: " + simpleInterest);
}
else{
    console.log("Invalid input, all values must be non-negative")
}

principal = 1500
rate = 7
time = 5
//her we calculate simple interest 
//and handling edge case if any case anyone provied negative value then you should not print
if(principal>-1 && rate >-1 && time>-1){
let simpleInterest = (principal*rate*time)/100;
//here we printing
console.log("The simple interest is: " + simpleInterest);
}
else{
    console.log("Invalid input, all values must be non-negative")
}

principal = 0
rate = 6
time = 2
//her we calculate simple interest 
//and handling edge case if any case anyone provied negative value then you should not print
if(principal>-1 && rate >-1 && time>-1){
let simpleInterest = (principal*rate*time)/100;
//here we printing
console.log("The simple interest is: " + simpleInterest);
}
else{
    console.log("Invalid input, all values must be non-negative")
}

