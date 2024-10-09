function customReplace(str, searchValue, replaceValue) {
    if (typeof searchValue === 'string') {
        
        return str.split(searchValue).join(replaceValue);
    } else if (searchValue instanceof RegExp) {
        
        return str.replace(searchValue, replaceValue);
    } else {
        throw new TypeError('searchValue must be a string or a RegExp');
    }
}

// Test cases
const paragraph = "I think Ruth's dog is cuter than your dog!";

console.log(customReplace(paragraph, "Ruth's", 'my'));
