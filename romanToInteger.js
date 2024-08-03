// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

// Example 1:

// Input: s = "III"
// Output: 3
// Explanation: III = 3.
// Example 2:

// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.
// Example 3:

// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

// Constraints:

// 1 <= s.length <= 15
// s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
// It is guaranteed that s is a valid roman numeral in the range [1, 3999].

/**
 * Converts a Roman numeral to an integer.
 *
 * @param {string} s - The Roman numeral to convert.
 * @returns {number} - The integer representation of the Roman numeral.
 */

// Define a function that converts a Roman numeral string to an integer
var romanToInt = function (s) {
  // Define a dictionary where the keys are Roman numerals and the values are their corresponding integer values
  let roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  // Initialize the result to 0
  let result = 0;

  // Iterate over each character in the input string
  for (let i = 0; i < s.length; i++) {
    // If the current Roman numeral is less than the next one, it means we have a situation like IV (4), IX (9), etc.
    if (roman[s[i]] < roman[s[i + 1]]) {
      // In this case, we add the difference of the next numeral and the current numeral to the result
      result += roman[s[i + 1]] - roman[s[i]];
      // We increment the index again to skip the next numeral as it has already been processed
      i++;
    } else {
      // If the current numeral is greater or equal to the next one, we simply add its value to the result
      result += roman[s[i]];
    }
  }
  // The function will return the result when the for loop is done
};

console.log(romanToInt("III")); // 3
console.log(romanToInt("LVIII")); // 58
console.log(romanToInt("MCMXCIV")); // 1994
