// Reverse a String

// Write a function named reverseString that takes a string as input and returns the reverse of the string. Use this function to reverse a given string.

// reversedString = reverseString("hello");

// // Sample Output: reversedString = "olleh"

function reverseString(str){
    let res = "";
    for(let i=str.length-1; i>-1; i--){
           res += str[i];
    }
    return res;
}

let reverse = reverseString("Hello");
console.log(reverse);