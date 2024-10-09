function Slice(array, start = 0, end = array.length) {
    const result = [];

    if (start < 0) {
        start = array.length + start;
    }
    if (end < 0) {
        end = array.length + end;
    }

    
    start = Math.max(0, start);
    end = Math.min(array.length, end);

    for (let i = start; i < end; i++) {
        result.push(array[i]);
    }

    return result;
}

const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

console.log(Slice(animals, 1))