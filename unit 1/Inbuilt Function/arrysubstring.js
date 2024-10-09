function Substring(str, start, end) {
    let result = '';
    
   
    start = start < 0 ? 0 : start;
    end = end === undefined ? str.length : end;
    end = end < 0 ? 0 : end;
    
    // Swap start and end if start is greater than end
    if (start > end) {
        [start, end] = [end, start];
    }

    
    for (let i = start; i < end; i++) {
        result += str[i];
    }

    return result;
}

// Test cases
const str = 'Hello, World!';

console.log(Substring(str, 7, 12));
//output: 'World'

console.log(Substring(str, 0, 5));
//output: 'Hello'