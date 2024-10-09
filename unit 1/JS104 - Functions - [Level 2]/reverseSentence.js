// Reverse a Sentence

// Write a function named reverseSentence that takes a sentence (a string containing words separated by spaces) as input and returns the sentence with its words reversed.

// Sample Input: "Hello World" Sample Output: "olleH dlroW"

function reverseSentence(sentence) {
    let reversedSentence = '';
    let word = '';

    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] !== ' ') {
            word = sentence[i] + word;
        } else {
            reversedSentence += word + ' ';
            word = '';
        }
    }

    reversedSentence += word;
    return reversedSentence;
}
console.log(reverseSentence("Hello World"))