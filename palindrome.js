let word1 = prompt("Enter the first word:");
let word2 = prompt("Enter the second word:");

function reverseString(str) {
    return str.split('').reverse().join('');
    }

    let reversedWord1 = reverseString(word1);
    let reversedWord2 = reverseString(word2);

    console.log(`Original word 1: ${word1}`);
    console.log(`Reversed word 1: ${reversedWord1}`);
    console.log(`Original word 2: ${word2}`);
    console.log(`Reversed word 2: ${reversedWord2}`);

    let isPalindrome1 = word1 === reversedWord1;
    let isPalindrome2 = word2 === reversedWord2;

    console.log(`Is "${word1}" a palindrome? ${isPalindrome1}`);
    console.log(`Is "${word2}" a palindrome? ${isPalindrome2}`);
