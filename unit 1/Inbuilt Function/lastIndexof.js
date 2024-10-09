function laseIndexOf(array, searchElement) {
    for (let i = array.length - 1; i >= 0; i--) {
        if (array[i] === searchElement) {
            return i;
        }
    }
    return -1;
}

const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

console.log(laseIndexOf(animals, 'Dodo'));