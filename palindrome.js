// palindrome checker write proper documentation

// A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward. For example, "madam" is a palindrome. Write a function that takes a string as an argument and returns true if the string is a palindrome, and false otherwise. The function should be case-insensitive and should ignore non-alphanumeric characters.

// Example
// palindrome("racecar"); // true
// palindrome(12321); // true

// Plan
// 1. Remove non-alphanumeric characters from the string and convert it to lowercase.
// 2. Compare the string with its reverse.
// 3. Return true if they are equal, and false otherwise.

function palindrome(str) {
  // remove non-alphanumeric characters and convert to lowercase
  str = str.replace(/[\W_]/g, "").toLowerCase();

  // compare the string with its reverse
  return str === str.split("").reverse().join("");
}

console.log(palindrome("test")); // false
