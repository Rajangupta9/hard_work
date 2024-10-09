function Includes(array, valueToFind) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === valueToFind) {
            return true;
        }
    }
    return false;
}

// Test cases
const array1 = [1, 2, 3];

console.log(Includes(array1, 2));