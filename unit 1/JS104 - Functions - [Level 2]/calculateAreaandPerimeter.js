// Calculate Area and Perimeter

// Write two functions to calculate the area and perimeter of a rectangle.

// Use the functions to calculate the area and perimeter of given dimensions.

function calculateArea(length, width) {
    return length * width;
}

function calculatePerimeter(length, width) {
    return 2 * (length + width);
}

let length = 5;
let width = 3;

let area = calculateArea(length, width);
console.log("area of the rectangle is: " + area);

let perimeter = calculatePerimeter(length, width);
console.log("perimeter of the rectangle is: " + perimeter);
